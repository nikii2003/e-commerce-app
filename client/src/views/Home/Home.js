import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";


function Home() {
 
  const [product, setProduct] = useState([]);

  const loadProduct = async () => {
    const response = await axios.get("/products");
    setProduct(response?.data?.data);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  return (
    <div>
      <h1 className="text-center">Add Product</h1> 

      {product.map((product, index) => {
        const {_id, name, description, price, productImage, brand } = product;
        return (
          <div key={index}>
            <div className="product-card-container" onClick={()=>{
              window.open(`/productdetail/${_id}`, '_blank')
            }}>
              <div>
              <img src={productImage} className="product-image"  alt=""/>
              </div>
            
            <div className="product-text">
              <h1 className="product-name">{name}</h1>
              <p className="product-description">{description}</p>
              <p className="product-price">{price}</p>
              <h3 className="product-brand">{brand}
              </h3>
             
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
