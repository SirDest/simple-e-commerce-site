import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <ol className='list-reset flex text-[13px]'>
        <li>
          <Link
            to='/'
            className='text-[13px] text-blue-400 hover:text-blue-800'
          >
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className='flex items-center'>
              <span className='mx-2'>/</span>
              {isLast ? (
                <span className='text-gray-500'>{value}</span>
              ) : (
                <Link to={to} className='text-blue-400 hover:text-blue-800'>
                  {value}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
