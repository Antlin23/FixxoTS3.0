import React from 'react'
import '../views/ProductsView.css'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../models/ProductModel'

interface Props{
    items: IProduct[]
  }

const AllProducts: React.FC<Props> = ({ items = []}) => {
  return (
    <div className='all-products-system'>
    <div className="all-products-section">
        {
        items.map( product => <ProductCard key={product.articleNumber} item={product} />) 
      } 
        </div>
      </div>

  )
}

export default AllProducts