import React, { useState } from "react";
import { IoCartOutline, IoMenuOutline, IoPersonOutline } from "react-icons/io5";
import { navElements } from "../utils/navElements";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='w-full h-fit rounded flex gap-2'>
      <button className='p-3 text-[15px] w-fit rounded bg-white text-black flex gap-4 items-center'>
        <p className='lg:block hidden'>Cart (0)</p>
        <div className='p-2 bg-gray-200 rounded'>
          <IoCartOutline className='text-[18px] font-light' />
        </div>
      </button>
      <div className='p-3 text-[15px] flex-1 rounded bg-white text-black flex justify-center md:justify-between gap-4 items-center'>
        <a href='/' className='font-bold'>
          REVELOFFICE
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
      <button className='p-3 text-[15px] w-fit rounded  bg-white text-black flex md:hidden gap-4 items-center'>
        <div className='p-2 bg-gray-200 rounded'>
          <IoMenuOutline className='text-[18px] text-black font-light' />
        </div>
      </button>
    </div>
  );
};

export default Header;
