
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './views/Home/Home';
import AddProduct from './views/AddProduct/AddProduct.js'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import UpdateDetails from './../src/views/UpdateDetails/UpdateDetails'
import ProductDetails from './views/ProductDetails/ProductDetails';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const router=createBrowserRouter([{
    path:'/',
    element:<Home/>
},
{
    path:'/addproduct/:_id',
    element:<AddProduct/>
},
{
    path:'/productdetail/:_id',
    element:<ProductDetails/>
},
{
    path:'/updatedetail/:_id',
    element:<UpdateDetails/>
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router ={router}/>
);


