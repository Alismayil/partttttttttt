import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { WishlistContext } from '../context/wishlistContext'
import { Link } from 'react-router-dom'

function HomePage() {
  const [product, setProduct] = useState([])

  const {handleAddWishlist}=useContext(WishlistContext)

  async function axiosData() {
    const res=await axios.get('http://localhost:3000/exam')
    setProduct(res.data)
  }

  useEffect(() => {
    axiosData()
  }, [])
  
  return (
    <div>
{
  product && product.map((item)=>(
    <div className="home" style={{border:'1px solid black'}}>
      <p>{item.name}</p>
      <p>{item.price}$</p>
      <button onClick={()=>handleAddWishlist(item)}>Wishlist</button>
      <Link to={`/detail/${item._id}`}>Detail</Link>
    </div>
  ))
}
    </div>
  )
}

export default HomePage