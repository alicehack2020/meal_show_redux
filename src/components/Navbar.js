import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
  import "./Navbar.css" 
const Navbar = () => {
  const item=useSelector((state)=>state.cart)
   
  
  return (  
    <div className='nav_main'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/Login" className='link'>Login</Link>
        <Link to="/Register" className='link'>Register</Link>
        <Link to="/Cart" className='link'>Cart:{item.length}</Link>
    </div>
  )
}

export default Navbar