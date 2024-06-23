import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";
const jewelryCategory = "https://fakestoreapi.com/products/category/jewelery";
const menCategory =
  "https://fakestoreapi.com/products/category/men's%20clothing";
const womenCategory =
  "https://fakestoreapi.com/products/category/women's%20clothing";
const electronicsCategory =
  "https://fakestoreapi.com/products/category/electronics";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchJewelryProducts = async () => {
  try {
    const response = await axios.get(jewelryCategory);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchMenProducts = async () => {
  try {
    const response = await axios.get(menCategory);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchWomenProducts = async () => {
  try {
    const response = await axios.get(womenCategory);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchElectronicsProducts = async () => {
  try {
    const response = await axios.get(electronicsCategory);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
