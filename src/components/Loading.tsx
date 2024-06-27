import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className='flex flex-col gap-2 text-[15px] md:text-[20px] text-center justify-center py-3'>
      <div className='m-auto flex items-center w-fit'>
        <ClipLoader />
      </div>
      <p>Please Wait...</p>
    </div>
  );
};

export default Loading;
