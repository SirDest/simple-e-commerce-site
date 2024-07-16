import React, { useEffect, useState } from "react";
import { Product } from "../../../types";
import { fetchWomenProducts } from "../../../api/apiService";
import { ClipLoader } from "react-spinners";
import { generateClassName } from "../../utils/tailwind";
import Card from "../Card";
import { ToastContainer } from "react-toastify";

const WomenCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchWomenProducts();
        setProducts(productsData);
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const errorStyle = ["md:text-[17px]", "text-[14px]"];

  return (
    <>
      {/* <ToastContainer /> */}
      {error ? (
        <div className='flex flex-col text-center justify-center py-3'>
          <p className='md:text-[21px] lg:text-[24px] text-[15px] py-2 font-bold'>
            Failed to load this section!
          </p>
          <p className={generateClassName(errorStyle)}>
            Looks like there is a problem with the internet connection,
          </p>
          <p className={generateClassName(errorStyle)}>
            please reload the page or try again.
          </p>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className='flex flex-col gap-2 text-[15px] md:text-[20px] text-center justify-center py-3'>
              <div className='m-auto flex items-center w-fit'>
                <ClipLoader />
              </div>
              <p>Please Wait...</p>
            </div>
          ) : (
            <div className='w-full h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
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

export default WomenCard;
