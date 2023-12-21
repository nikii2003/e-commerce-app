import React, { useEffect, useState } from 'react'
import "./UpdateDetails.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
function UpdateDetails() {


    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [productImage , setProductImage] = useState('')
    const [brand,setBrand]=useState('')

    const {_id} = useParams()

    const  loadproduct = async ()=>{
      const response = await axios.get(`/product/${_id}`)
      const {name,description,price,productImage,brand}=response?.data?.data
      setName(name)
      setDescription(description)
      setPrice(price)
      setProductImage(productImage)
      setBrand(brand)
    } 

    useEffect(()=>{
      loadproduct()
    },[])

    const updatestudent = async () =>{
      const UpdateDetails ={
        name,
        description,
        price,
        productImage,
        brand
      }

    const response= await axios.put(`/product/${_id}` , UpdateDetails)  
    alert(response?.data?.message)
    }

  return (
    <div>
      <Navbar/>
        <h1 className='update-heading'>UpdateDetails</h1>
<form className='input-container'>
    
      <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="input-field"
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="input-field"
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
          placeholder="name"
          value={productImage}
          onChange={(e) => {
            setProductImage(e.target.value);
          }}
          className="input-field"
        />
        <input
          type="text"
          placeholder="name"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          className="input-field"
        />

<button className="add-product-btn" type="button" onClick={updatestudent}>update product</button>
</form>
    </div>
  )
}

export default UpdateDetails
