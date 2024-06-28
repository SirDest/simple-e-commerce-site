import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import Breadcrumbs from "../Breadcrumbs";

import CartItems from "./CartItems";
import { selectTotalPrice } from "../../redux/selectors";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  const totalPrice = useSelector(selectTotalPrice);

  return (
    <>
      <div className='w-full h-fit p-7 bg-white text-black rounded flex flex-col '>
        <Breadcrumbs />
        <div className='flex justify-between items-center w-full h-fit py-4 border-b border-gray-300'>
          <h1 className='text-black md:text-[40px] text-[28px] font-normal'>
            Shopping Cart
          </h1>
          <p className='text-[13px]'>
            <span className='font-bold'>{cartItems.length} items</span>
          </p>
          <p className='text-[13px]'>
            Total: <span className='font-bold'>$ {totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <CartItems />
    </>
  );
};

export default Cart;
