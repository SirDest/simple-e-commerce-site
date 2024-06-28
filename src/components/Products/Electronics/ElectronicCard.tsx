import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "../../../types";
import { fetchElectronicsProducts } from "../../../api/apiService";
import { useDispatch } from "react-redux";
import { addtocart } from "../../../redux/cartSlice";
import Loading from "../../Loading";
import ErrorPage from "../../ErrorPage";
import Card from "../Card";

const ElectronicCard: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchElectronicsProducts();
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
                ({ id, title, image, price, description, category }) => (
                  <Card
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

export default ElectronicCard;
