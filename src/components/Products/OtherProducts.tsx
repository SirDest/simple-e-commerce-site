import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import { fetchProducts } from "../../api/apiService";
import Card from "./Card";

const OtherProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getRandomProducts = (products: any[], count: number): any[] => {
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        const randomProducts = getRandomProducts(productsData, 3);
        setProducts(randomProducts);
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
        <p className='m-auto text-[15px]'>Nothing here for now!!</p>
      ) : (
        <div>
          {loading ? (
            <p className='m-auto text-[15px]'>
              Fetching items for you... Please Wait
            </p>
          ) : (
            <div className='w-full h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7'>
              {products.map(
                ({ id, title, category, description, image, price }) => (
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

export default OtherProducts;
