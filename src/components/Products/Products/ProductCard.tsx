import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "../../../types";
import { fetchProducts } from "../../../api/apiService";
import { addtocart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { generateClassName } from "../../utils/tailwind";
import { ClipLoader } from "react-spinners";

const ProductCard = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
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
                  <div
                    key={id}
                    className='h-[320px] rounded flex flex-col bg-white gap-3 hover:scale-110 ease-in-out duration-300 px-6 py-2 cursor-pointer group hover:border hover:border-gray-200'
                  >
                    <div
                      className='w-full flex-1 border-b relative'
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* div for image */}
                    </div>
                    <div className='flex flex-col justify-between h-fit gap-2'>
                      <p className='text-[13px] font-semibold truncate group-hover:whitespace-normal group-hover:overflow-visible'>
                        {title}
                      </p>
                      <div className='flex justify-between text-[13px] text-gray-700'>
                        <div>
                          <p>{price} USD</p>
                        </div>
                        <button
                          onClick={() =>
                            dispatch(
                              addtocart({
                                id,
                                title,
                                price,
                                image,
                                quantity: 1,
                              })
                            )
                          }
                          className='p-2 bg-gray-200 cursor-pointer hover:bg-gray-400 ease-in-out duration-500 rounded'
                        >
                          <IoCartOutline className='text-[15px] text-gray-700 font-light' />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductCard;
