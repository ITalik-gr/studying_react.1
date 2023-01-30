import React, { useState } from "react"
import { products } from "../data/products"
import { IProduct } from "../models"

interface productProps {
  product: IProduct
}

export function Product({product}: productProps) {
  const [details, setDetails] = useState(false)
  const buttonBgClass = details ? 'bg-yellow-400' : 'bg-blue-400'
  const buttonClasses = ['py-2 px-4 border', buttonBgClass]

  return (
    <div className="border px-4 py-2 flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title}/>
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>

      <button 
      className={buttonClasses.join(' ')}
      
      onClick={() => setDetails(prev => !prev)}>

        {details ? 'Hide Detaild' : 'Show Setaild'}

      </button>

      {details && <div> 
        <p>{product.description}</p>
      </div>}

    </div>
  )
}
