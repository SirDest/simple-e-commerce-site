import React from "react";
import { generateClassName } from "../utils/tailwind";

const errorStyle = ["md:text-[15px]", "text-[13px]"];

const EmptyCart: React.FC = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col py-3'>
      <p className='md:text-[21px] lg:text-[24px] text-[15px] py-2 font-bold'>
        Your Cart is Empty
      </p>
      <p className={generateClassName(errorStyle)}>
        Looks like you've not added anything to your Cart,
      </p>
      <p className={generateClassName(errorStyle)}>
        go ahead and explore top categories.
      </p>
      <div className='w-fit p-3 flex gap-5'>
        <a
          href='/'
          className='text-blue-400 hover:text-blue-600 cursor-pointer text-[13px] flex font-normal items-center'
        >
          Go Home
        </a>
        <a
          href='/product'
          className='text-blue-400 hover:text-blue-600 cursor-pointer text-[13px] flex font-normal items-center'
        >
          View all products
        </a>
      </div>
    </div>
  );
};

export default EmptyCart;
