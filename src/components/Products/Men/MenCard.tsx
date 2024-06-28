import React, { useEffect, useState } from "react";
import { Product } from "../../../types";
import { fetchMenProducts } from "../../../api/apiService";
import ErrorPage from "../../ErrorPage";
import Loading from "../../Loading";
import Card from "../Card";

const MenCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchMenProducts();
        setProducts(productsData);
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      {error ? (
        <ErrorPage />
      ) : (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className='w-full h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
              {products.map(
                ({ id, title, category, description, image, price }) => (
                  <Card
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    image={image}
                    description={description}
                    category={category}
                  />
                )
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MenCard;
