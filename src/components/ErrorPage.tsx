import React from "react";
import { generateClassName } from "./utils/tailwind";

const errorStyle = ["md:text-[17px]", "text-[14px]"];

const ErrorPage: React.FC = () => {
  return (
    <div className='flex flex-col text-center justify-center py-3'>
      <p className='md:text-[21px] lg:text-[24px] text-[15px] py-2 font-bold'>
        Failed to load this section!
      </p>
      <p className={generateClassName(errorStyle)}>
        Looks like there is a problem with the internet connection,
      </p>
      <p className={generateClassName(errorStyle)}>
        please reload the page or try again.
      </p>
    </div>
  );
};

export default ErrorPage;
