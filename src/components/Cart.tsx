import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { CartItem } from "../types";
import { getItemFromLocalStorage } from "./utils/localStorage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { selectCartItems } from "../redux/cartSlice";

const Cart = () => {
  //   const cart = JSON.parse(localStorage.getItem("cart"));

  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  return (
    <>
      <div className='w-full h-fit p-7 bg-white text-black rounded flex flex-col '>
        <Breadcrumbs />
        <div className='flex w-full h-fit py-4 border-b border-gray-300'>
          <h1 className='text-black text-[40px] font-normal'>Shopping Cart</h1>
        </div>
      </div>
      <div className='w-full h-fit p-3 bg-white flex flex-col rounded'>
        {/* first item */}
        <div className='w-full min-h-[80px]'>
          {cartItems.map(({ id, image, price, quantity, title }) => (
            <div key={id}>
              <p>{title}</p>
              <p>{quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
