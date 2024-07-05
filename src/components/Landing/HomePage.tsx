import React from "react";
import Header from "../Header/Header";
import { IoArrowForwardOutline } from "react-icons/io5";
import Landing from "./Landing";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className='w-full h-fit p-7 bg-white text-black rounded flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between w-full h-fit py-4 border-b border-gray-300'>
          <h1 className='text-black text-[40px] font-normal'>Shop With Us</h1>
          <p className='text-[13px] md:w-[400px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto
            quas quae, cupiditate illo nihil porro suscipit quis magni nesciunt
            harum repelle
          </p>
        </div>
        <div className='w-full h-fit text-right flex justify-between py-4'>
          <p className='text-black text-[13px] flex font-normal items-center gap-1'>
            Random Products
          </p>
          <a
            href='/product'
            className='text-gray-400 hover:text-blue-500 cursor-pointer text-[13px] flex font-normal items-center gap-1'
          >
            View all products
            <IoArrowForwardOutline />
          </a>
        </div>
      </div>
      <Landing />
    </>
  );
};

export default HomePage;
