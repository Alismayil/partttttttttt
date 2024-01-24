import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios'

function DetailPage() {
  const {id}=useParams()

  const [detail, setdetail] = useState()

  async function detailFunc() {
    const res=await axios.get(`http://localhost:3000/exam/${id}`)
    setdetail(res.data)
  }
  useEffect(() => {
  detailFunc()
  }, [])
  
  return (
    <div>
      {
        detail ? 
        <div className="detailCart" style={{border:'1px solid blue'}}>
          <p>{detail.name}</p>
          <p>{detail.price}$</p>
        </div>
        :""
      }
    </div>
  )
}

export default DetailPage