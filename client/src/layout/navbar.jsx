import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex",gap:"10px"}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/wishlist'}>Wishlist</Link>
        <Link to={'/basket'}>Basket</Link>
        <Link to={'/add'}>Add</Link>
    </div>
  )
}

export default Navbar