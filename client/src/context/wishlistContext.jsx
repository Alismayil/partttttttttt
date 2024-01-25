import React, { createContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const WishlistContext=createContext()
function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([])

    // function handleAddWishlist(item) {
    //     setWishlist([...wishlist, item])
    // }

    function handleAddWishlist(item) {
        const wishlistProduct=wishlist.find((x)=>x._id===item._id)
        if (wishlistProduct) {
            handleDelete(item._id)
            toast.error("Deleted Wishlist")
        }
        else{
            setWishlist([...wishlist, item])
            toast.success('Send Wishlist')

        }
    }

    function handleDelete(id) {
        setWishlist(wishlist.filter((x)=>x._id !== id))
    }
    const data={
        handleAddWishlist, 
        wishlist, setWishlist,
        handleDelete
    }

  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider