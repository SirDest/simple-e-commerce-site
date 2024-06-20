import React from "react";

const HomePage = () => {
  return (
    <div className='w-full h-fit p-7 bg-white text-black rounded flex flex-col'>
      <p className='text-gray-500 text-[13px]'>Home \ Store \ Chairs</p>
      <div className='flex justify-between w-full h-fit py-4 border-b border-gray-300'>
        <h1 className='text-black text-[40px] font-normal'>Shop With Us</h1>
        <p className='text-[13px] w-[400px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto
          quas quae, cupiditate illo nihil porro suscipit quis magni nesciunt
          harum repelle
        </p>
      </div>
    </div>
  );
};

export default HomePage;
