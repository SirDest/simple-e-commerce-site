import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";

const ProductDetails = () => {
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
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
