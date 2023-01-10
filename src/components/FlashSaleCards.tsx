import React, { useContext, useEffect } from 'react'
import './FlashSaleCards.css'
import ProductCard from './ProductCard'
import { ProductContext, ProductContextType, useProductContext } from '../contexts/ProductContexts'
import { IProduct, IProductContext } from '../models/ProductModel'

interface Props{
  items: IProduct[]
}

const FlashSaleCards:React.FC<Props> = ({items = []}) => {


  return (
    <div className='flashsales-cards-container'>
      <div className="flashsales-cards">
          {
            items.map(product => <ProductCard key={product.articleNumber} item={product} />) 
          } 
      </div>
    </div>
  )
}

export default FlashSaleCards