import Breadcrumbs from "./Breadcrumbs";

const Cart = () => {
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
        <div className='w-full h-[80px]'></div>
      </div>
    </>
  );
};

export default Cart;
