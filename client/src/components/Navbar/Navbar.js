import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-div col-sm-12 d-flex flex-wrap'>
        <Link to='/' className='navbar-item'>Home</Link>
        <Link to='/addproduct/:_id' className='navbar-item'>AddProduct</Link>
        
        
    </div>
  )
}

export default Navbar