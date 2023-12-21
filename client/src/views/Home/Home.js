import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faShoppingCart,
  faBoxOpen,
  faTags,
  faBarcode,
  faGift,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);

  const loadProduct = async () => {
    const response = await axios.get("/products");
    setProduct(response?.data?.data);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const deletedProduct = async (_id) => {
    const response = await axios.delete(`/product/${_id}`);
    console.log(response?.data?.data);

    alert("are you sure you want to delete this ");
    loadProduct();
  };

  return (
    <div>
      <Navbar/>
      <h1 className="text-center">E-commerce-products</h1>
      <h3 className="">
      
      </h3>
      <div className="card-flex">
        {product.map((product, index) => {
          const { _id, name, description, price, productImage, brand } =
            product;
          return (
            <div key={index} className="product-card-container">
              <img src={productImage} alt="" className="product-image" />
              <br />
              <h3 className="product-name">{name}</h3>
              <h4 className="price-name">{price}</h4>
              <p className="star-font">
                <FontAwesomeIcon icon={faStar} className="start-color" />
                <FontAwesomeIcon icon={faStar} className="start-color" />
                <FontAwesomeIcon icon={faStar} className="start-color" />
                <FontAwesomeIcon icon={faStar} className="start-color" />
                <FontAwesomeIcon icon={faStarHalf} className="start-color" />
              </p>
              <div className="flex-item">
                <Link to={`/updatedetail/${_id}`} className="edit-product">
                  Edit
                </Link>
                <a href={`/productdetail/${_id} `} target="_blank" className="">
                  <FontAwesomeIcon icon={faAngleRight} />
                  <FontAwesomeIcon icon={faAngleRight} />
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <button
                  className="btn-delete"
                  onClick={() => {
                    deletedProduct(_id);
                  }}
                >
                  Delete
                </button>
                <br />
              </div>

              <button className="buy-now-btn">Buy Now</button>
              <button className="add-to-cart-btn">
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
