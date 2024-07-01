import React, { useState } from "react";
import { IoCartOutline, IoMenuOutline, IoPersonOutline } from "react-icons/io5";
import { navElements } from "../utils/navElements";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectCartItems } from "../../redux/cartSlice";
import HeaderDropDown from "./HeaderDropDown";

const Header: React.FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);

  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  const handleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };
  return (
    <div className='w-full h-fit rounded flex gap-2'>
      <a
        href='/cart'
        className='p-3 text-[15px] w-fit rounded bg-white text-black flex gap-4 items-center'
      >
        <p className='lg:block hidden'>Cart ({cartItems.length})</p>
        <div className='p-2 bg-gray-200 rounded'>
          <IoCartOutline className='text-[18px] font-light' />
        </div>
      </a>
      <div className='p-3 text-[15px] flex-1 rounded bg-white text-black flex justify-center md:justify-between gap-4 items-center'>
        <a href='/' className='font-bold'>
          DESTINED
        </a>
        <ul className='md:flex hidden text-[15px] items-center lg:gap-10 gap-6'>
          {navElements.map(({ name, link }) => (
            <Link
              to={link}
              key={name}
              className='text-gray-500 hover:text-black cursor-pointer flex font-normal items-center gap-2'
            >
              {name}
            </Link>
          ))}
        </ul>
      </div>
      <button className='p-3 text-[15px] w-fit rounded bg-gray-700 text-white hidden md:flex gap-4 items-center'>
        <p className='lg:block hidden'>Create Account</p>
        <div className='p-2 bg-gray-500 rounded'>
          <IoPersonOutline className='text-[18px] text-white font-light' />
        </div>
      </button>
      <button
        onClick={handleSideBar}
        className='p-3 text-[15px] w-fit rounded  bg-white text-black flex md:hidden gap-4 items-center'
      >
        <div className='p-2 bg-gray-200 rounded'>
          <IoMenuOutline className='text-[18px] text-black font-light' />
        </div>
      </button>
      <div
        style={{
          display: !sideBar ? "none" : "flex",
        }}
        className='fixed z-10 top-0 left-0 w-full h-fit md:none flex'
      >
        <HeaderDropDown setSideBar={setSideBar} />
      </div>
    </div>
  );
};

export default Header;
