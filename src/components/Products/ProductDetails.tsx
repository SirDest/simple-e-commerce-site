import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import Breadcrumbs from "../Breadcrumbs";
import { addtocart, selectCartItems } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import OtherProducts from "./OtherProducts";

const ProductDetails: React.FC = () => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state: RootState) => selectCartItems(state));
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [itemQty, setItemQty] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const increaseQty = () => {
    setItemQty(itemQty + 1);
  };

  const decreaseQty = () => {
    itemQty >= 1 && setItemQty(itemQty - 1);
  };

  const handleCartClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (product) {
      const { id, title, price, image } = product;
      dispatch(
        addtocart({
          id,
          title,
          price,
          image,
          quantity: itemQty,
        })
      );
    }
  };

  if (error) {
    return <ErrorPage />;
  }

  if (loading || !product) {
    return <Loading />;
  }

  return (
    <div className='w-full h-fit'>
      <div className='bg-white rounded'>
        <div className='w-full h-fit p-7 bg-white text-black rounded flex flex-col'>
          <Breadcrumbs />
          <div className='flex flex-col md:flex-row justify-between w-full h-fit py-4 border-b border-gray-300'>
            <h1 className='text-black text-[40px] font-normal'>Product</h1>
            <p className='text-[13px] md:w-[400px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              iusto quas quae, cupiditate illo nihil porro suscipit quis magni
              nesciunt harum repelle
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-10 justify-between w-full h-fit text-[18px] font-normal mt-4 rounded bg-white p-7'>
        <div className='flex-1 justify-center'>
          <div
            className='h-[420px] md:w-[290px] w-full m-auto'
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src={product.image} alt={product.title} /> */}
          </div>
        </div>
        <div className='w-full m-auto lg:w-[480px] h-fit bg-gray-200 p-[20px] rounded'>
          <div className='flex flex-col gap-3 p-[20px] bg-white rounded'>
            <h1 className='md:text-[20px] text-[15px] font-semibold'>
              {product.title}
            </h1>
            <p className='md:text-[18px] text-[15px]'>${product.price}</p>
            <p className='first-letter:capitalize md:text-[14px] text-[13px] leading-[24px] text-gray-500'>
              {product.description}
            </p>
            <div className='flex w-full h-fit justify-between items-center'>
              <div className='flex items-center gap-3'>
                <p className='md:text-[15px] text-[13px]'>QTY</p>
                <div className='w-fit h-full flex gap-2 items-center'>
                  <button onClick={decreaseQty}>-</button>
                  <p className='border border-gray-300 px-3 py-1'>{itemQty}</p>
                  <button onClick={increaseQty}>+</button>
                </div>
              </div>
              <button
                onClick={handleCartClick}
                className='md:p-[20px] p-[13px] bg-black md:text-[15px] text-[13px] text-white font-light cursor-pointer z-10 hover:bg-gray-900 ease-in-out duration-500 rounded flex w-fit items-center gap-[24px]'
              >
                Add to Cart
                <div className='p-2 bg-gray-500 rounded'>
                  <IoCartOutline className='md:text-[18px] text-[15px] text-white font-light' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-fit mt-4 rounded bg-white p-7'>
        <p className='text-black text-[20px] font-normal pb-4 border-b border-gray-300'>
          Other products for you
        </p>
        <OtherProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
