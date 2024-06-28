import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { addtocart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../types";

const Card: React.FC<Product> = ({
  id,
  title,
  image,
  price,
  category,
  description,
}) => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default Card;
