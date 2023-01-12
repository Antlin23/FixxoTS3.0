import React from 'react'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../models/ProductModel'

interface Props{
  items: IProduct[]
}

const _FourProducts: React.FC<Props> = ({ items = []}) => {
  return (
    <div className='product-card-container'>
      <div className='product-cards'>
      {
        items.map( product => <ProductCard key={product.articleNumber} item={product} />) 
      } 
      </div>
    </div>
  )
}

export default _FourProducts