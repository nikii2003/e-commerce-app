import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { useParams } from "react-router-dom";
function Home() {
  const {id}=useParams();
  const [product, setProduct] = useState([]);

  const loadProduct = async () => {
    const response = await axios.get("/products");
    setProduct(response.data.data);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  return (
    <div>
      <h1 className="text-center">Add Product</h1>

      {product.map((product, index) => {
        const { name, description, price, productImage, brand } = product;
        return (
          <div key={index}>
            <div className="product-card-container">
              <div>
              <img src={productImage} className="product-image" />
              </div>
            
            <div className="product-text">
              <h1 className="product-name">{name}</h1>
              <p className="product-description">{description}</p>
              <p className="product-price">{price}</p>

              <h3 className="product-brand">{brand}</h3>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
