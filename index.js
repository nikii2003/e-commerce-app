import express from 'express';
import mongoose from 'mongoose';
import product from './src/models/product.js';
import dotenv from 'dotenv'
dotenv.config();
const app =express();

app.use(express.json());

const MONGODB_URI=''

const mongodbConnection =  async()=>{
    const conn = await mongoose.connect( process.env.MONGODB_URI)
    if(conn){
        console.log("MongoDB connected successfully")
    }
}
mongodbConnection();
app.get('/products', async (req,res)=>{
    const products= await product.find();
    res.json({
    success:true,
    data:products,
    message:"all product are find.."
    })
})
app.post('/product', async (req,res)=>{
    const{name,description,price,productImage,brand}=req.body
     if(!name){
     return res.json({
         success:false,
         message:"Product name is required"
     })
     }
     if(!description){
        return res.json({
             success:false,
            message:"Product description is required"
        })
        }
        if(!price){
            return res.json({
                success:false,
                message:"Product price is required"
            })
        }
        if(!brand){
            return res.json({
                success:false,
                message:"Product brand is required"
            })
        }
    const newProduct = new product({
    name :name,
    description:description,
    price:price,
    productImage:productImage,
    brand:brand
    })
    const saveNewproduct = await newProduct.save();
    res.json({
      success:true,
      data:saveNewproduct,
      message:"successfully add products"
    })
})
app.get('/product', async (req,res)=>{
  const {name}=req.query
  const products= await product.find({name:name})
    res.json({
     success:true,
     data:products,
     message:"successfuly find your product"
    })
    })

app.delete('/product/:_id',async (req,res)=>{
const {_id}=req.params;
await product.deleteOne({_id:_id})
res.json({
    success:false,
    message:"deleted succsessfuly"
})



})    
const PORT=8080;
app.listen(PORT,(req,res)=>{
console.log(`server is running on PORT ${PORT}`)
})