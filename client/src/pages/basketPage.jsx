import React, { useContext } from 'react'
import { BasketContext } from '../context/basketContext'

function BasketPage() {
  const {basket , handleDelete, handleCountVal}=useContext(BasketContext)

  const subtotal=basket.reduce((subtotal, item)=>subtotal+=(item.price * item.count), 0)
  return (
    <div>
      <p>Subtotal: {subtotal}$</p>
      { basket && basket.map((item)=>(
        <div className="basketCart" style={{border:'1px solid yellow'}}>
          <p>{item.name}</p>
          <p>{item.price}$</p>
          <button onClick={()=>handleCountVal(true , item._id)} >+</button>
      <p>Count: {item.count}</p>
      <button onClick={()=>handleCountVal(false , item._id)} >-</button>
      <p>Total: {item.total}$</p>
          <button onClick={()=>handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default BasketPage