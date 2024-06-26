import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "../../../types";
import { fetchMenProducts } from "../../../api/apiService";
import { useDispatch } from "react-redux";
import { addtocart } from "../../../redux/cartSlice";

const MenCard = () => {
  const dispatch = useDispatch();
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
        <div className='flex text-[20px] text-center justify-center py-3'>
          <p>Error loading page... Try again later!</p>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className='flex text-[20px] text-center justify-center py-3'>
              <p>Loading Products... Please wait...</p>
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

export default MenCard;
