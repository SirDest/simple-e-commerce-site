import React from "react";
import { ClipLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div className='flex flex-col gap-2 text-[15px] md:text-[20px] text-center justify-center py-3'>
      <div className='m-auto flex items-center w-fit'>
        <ClipLoader />
      </div>
      <p className='md:text-[17px] text-[14px]'>
        Getting products, Please wait...
      </p>
    </div>
  );
};

export default Loading;
