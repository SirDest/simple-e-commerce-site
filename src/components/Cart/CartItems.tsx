import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartItems,
} from "../../redux/cartSlice";
import EmptyCart from "./EmptyCart";
import { toast } from "react-toastify";

const CartItems: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const deleteProduct = (id: number) => {
    dispatch(removeItem(id));
    cartItems.length <= 1 &&
      toast(`Your cart is now empty`, { theme: "dark", autoClose: 5000 });
  };

  return (
    <>
      {cartItems.length < 1 ? (
        <EmptyCart />
      ) : (
        <div className='w-full h-fit flex flex-col gap-2 rounded'>
          {cartItems.map(({ id, image, quantity, title, price }) => (
            <div
              key={id}
              className='w-full h-[90px] border-none hover:bg-gray-300 rounded p-1 md:p-3 flex justify-center items-center bg-white gap-3 text-[13px] md:text-[17px]'
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
                    <p>$ {price.toFixed(2)}</p>
                  </div>

                  <div className='w-1/2 h-full flex gap-2 items-center'>
                    <button
                      onClick={() => {
                        handleDecrement(id);
                      }}
                    >
                      -
                    </button>
                    <p>{quantity}</p>
                    <button
                      onClick={() => {
                        handleIncrement(id);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className='w-1/2 h-full flex items-center'>
                    <p>
                      ${" "}
                      <span className='font-bold'>
                        {(price * quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => deleteProduct(id)}
                className='p-2 bg-gray-200 hover:bg-gray-400 duration-300 ease-in-out rounded flex items-center h-fit'
              >
                <IoTrashOutline className='text-[18px] font-light' />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CartItems;
