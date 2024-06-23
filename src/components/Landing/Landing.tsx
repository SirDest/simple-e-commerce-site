import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Product } from "../../types";
import { fetchProducts } from "../../api/apiService";

const Landing = () => {
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
        console.log("All products", productsData);

        const randomProducts = getRandomProducts(productsData, 7);
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
    <div className='w-full h-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
      {products.map(({ id, title, category, description, image, price }) => (
        <div
          key={id}
          className='h-[320px] rounded flex flex-col bg-white gap-3 hover:scale-110 ease-in-out duration-300 px-6 py-2 cursor-pointer group overflow-hidden'
        >
          <div className='w-full flex-1 border-b relative'>
            {/* Placeholder for image */}
          </div>
          <div className='flex flex-col justify-between h-fit gap-2'>
            <p className='text-[13px] font-semibold truncate group-hover:whitespace-normal group-hover:overflow-visible'>
              {title}
            </p>
            <div className='flex justify-between text-[13px] text-gray-700'>
              <div>
                <p>{price} USD</p>
              </div>
              <div className='p-2 bg-gray-200 cursor-pointer hover:bg-gray-400 ease-in-out duration-500 rounded'>
                {/* Assuming IoCartOutline is an icon component */}
                <IoCartOutline className='text-[15px] text-gray-700 font-light' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Landing;
