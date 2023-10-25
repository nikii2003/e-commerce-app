
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import AddProduct from './views/AddProduct/AddProduct.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ProductDetails from './views/ProductDetails/ProductDetails';

const router=createBrowserRouter([{
    path:'/',
    element:<Home/>
},
{
    path:'/addproduct',
    element:<AddProduct/>
},
{
    path:'/productdetail/:_id',
    element:<ProductDetails/>
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router ={router}/>
);


