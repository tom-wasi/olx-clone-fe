import React, { useEffect, useState } from "react";
import axiosConfig from "../api/axiosConfig";

const Product = ({ product }) => (
  <div key={product.id}>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
  </div>
);

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axiosConfig.get("/products/newest");
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="form">
      <h2>Newest Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;