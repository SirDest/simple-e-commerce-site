import React from "react";
import Breadcrumbs from "../../Breadcrumbs";
import JewelriesCard from "./JewelriesCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { selectCartItems } from "../../../redux/cartSlice";

const Jewelries: React.FC = () => {
  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  return (
    <>
      <div className='w-full h-fit p-7 bg-white text-black rounded flex flex-col'>
        <Breadcrumbs />
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
            All Jewelries
          </p>
          <a
            href='/cart'
            className='p-3 text-[13px] w-fit rounded bg-white text-black flex gap-4 items-center'
          >
            Cart ({cartItems.length})
          </a>
        </div>
      </div>
      <JewelriesCard />
    </>
  );
};

export default Jewelries;
