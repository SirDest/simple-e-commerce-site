import React, { SetStateAction } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Dispatch } from "redux";
import { navElements } from "../utils/navElements";

interface MyComponentProps {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDropDown: React.FC<MyComponentProps> = ({ setSideBar }) => {
  const handleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <div className='h-screen w-full bg-gray-200 flex lg:hidden flex-col pt-4 pb-10 px-7'>
      <div
        onClick={handleSideBar}
        className='flex justify-end text-right cursor-pointer font-light '
      >
        <div className=' p-2 rounded text-[25px] w-fit bg-white text-black flex '>
          <IoCloseOutline className='text-[25px] text-black font-light' />
        </div>
      </div>
      {/* <button
        onClick={handleSideBar}
        className='p-3 text-[15px] w-fit rounded  bg-white text-black flex md:hidden gap-4 items-center'
      >
        <div className='p-2 bg-gray-200 rounded'>
          <IoMenuOutline className='text-[18px] text-black font-light' />
        </div>
      </button> */}
      <div className='flex flex-col w-full content-center text-[22px] py-2'>
        {navElements.map(({ name, link }) => (
          <a className='text-[24px] py-2 px-4' href={link} key={link}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderDropDown;
