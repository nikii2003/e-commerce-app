import React, { useEffect, useState } from 'react'
import "./ProductDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

export default function ProductDetails() {
  const { _id } = useParams();
  const [product,setProduct]=useState({})

  const loadProduct = async ()=>{
    const response=  await axios.get(`/product/${_id}`)
   setProduct(response?.data?.data)
  }

  useEffect(()=>{
   loadProduct();
  },[])
 
  return (
    <div className='product-container'>
      <Navbar/>
      <h1 className='text-center'>ProductDetails</h1>
      <div>
      <p1 className='text-center'> ProductId :{_id}</p1>
       <p className='product-name'>{product.name}</p>
       <p className='product-description'>{product.description}</p>
       <img src={product.productImage} className='product-image'/>
     <h1>{product.brand}</h1>
     </div>
    </div>
  )
}
