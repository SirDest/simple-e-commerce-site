import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectCartItems } from "../../redux/cartSlice";

const CartItems = () => {
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  console.log("cartItems", cartItems);

  return (
    <div className='w-full h-fit flex flex-col gap-2 rounded'>
      {/* first item */}
      {cartItems.map(({ id, image, quantity, title, price }) => (
        <div
          key={id}
          className='w-full h-[90px] rounded p-1 md:p-3 flex justify-center items-center bg-white gap-3 text-[13px] md:text-[17px]'
        >
          <div
            className='min-w-[80px] w-[80px] h-full'
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* image */}
          </div>

          <div className='w-full h-full flex flex-col'>
            <div className='h-1/2 border-b border-gray-200'>
              <p>{title}</p>
            </div>

            <div className='flex items-center w-full h-1/2 justify-between'>
              <div className='w-1/2 h-full flex items-center'>
                <p>{price}</p>
              </div>

              <div className='w-1/2 h-full flex gap-2 items-center'>
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>
              </div>
            </div>
          </div>

          <button className='p-2 bg-gray-200 hover:bg-gray-400 duration-300 ease-in-out rounded flex items-center h-fit'>
            <IoTrashOutline className='text-[18px] font-light' />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
