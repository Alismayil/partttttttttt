import React, { useContext } from 'react'
import { WishlistContext } from '../context/wishlistContext'

function WishlistPage() {
  const {wishlist , handleDelete}=useContext(WishlistContext)
  return (
    <div>
      { wishlist && wishlist.map((item)=>(
        <div className="wishlisCart" style={{border:'1px solid red'}}>
          <p>{item.name}</p>
          <p>{item.price}$</p>
          <button onClick={()=>handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default WishlistPage