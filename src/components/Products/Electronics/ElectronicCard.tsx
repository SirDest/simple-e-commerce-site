import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "../../../types";
import { fetchElectronicsProducts } from "../../../api/apiService";
import { useDispatch } from "react-redux";
import { addtocart } from "../../../redux/cartSlice";
import Loading from "../../Loading";
import ErrorPage from "../../ErrorPage";

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
              {products.map(({ id, title, image, price }) => (
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
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ElectronicCard;
