import React, { useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [brand, setBrand] = useState("");

  const productadd = async () => {
    const myproducts = {
    name,
    description,
    price,
    productImage,
    brand
    };
     const response=  await axios.post("/product", myproducts);
     alert(response?.data?.message)
     console.log(response)

    setName("");
    setDescription("");
    setPrice("");
    setProductImage("");
    setBrand("");
  };
  return (
    <div>
      <Navbar/>
      <h3 className="text-center">Add Products Here 👇</h3>

      <form className=" input-container  col-sm-4 p-1">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="input-field  "
        />

        <input
          type="text"
          placeholder=" description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="input-field m-1"
        />
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="input-field"
        />
        <input
          type="text"
          placeholder=" Image"
          value={productImage}
          onChange={(e) => {
            setProductImage(e.target.value);
          }}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          className="input-field"
        />
        <button className="add-product-btn" type="button" onClick={productadd}>
          add product
        </button>
      </form>
    </div>
  );
}
export default AddProduct;
