import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import Breadcrumbs from "../Breadcrumbs";
import { selectCartItems } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const ProductDetails: React.FC = () => {
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (error) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  if (!product) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-fit p-7 bg-white text-black rounded flex flex-col'>
        <Breadcrumbs />
        <div className='flex flex-col md:flex-row justify-between w-full h-fit py-4 border-b border-gray-300'>
          <h1 className='text-black text-[40px] font-normal'>Store</h1>
          <p className='text-[13px] md:w-[400px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto
            quas quae, cupiditate illo nihil porro suscipit quis magni nesciunt
            harum repelle
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-3 justify-center w-full h-fit text-[18px] font-normal mt-4 rounded bg-white p-7'>
        <div
          className='h-[300px] md:w-[750px] w-full'
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img src={product.image} alt={product.title} /> */}
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-[18px]'>
            $<span className='font-semibold text-[22px]'>{product.price}</span>
          </p>
          <h1 className='text-[20px] font-semibold'>{product.title}</h1>
          <p className='first-letter:capitalize text-[16px]'>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
