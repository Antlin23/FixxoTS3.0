import React, { useContext } from 'react'
import './TopProducts.css'
import { ProductContext } from '../contexts/ProductContexts'
import ProductCard from '../components/ProductCard'
import { IProduct, IProductContext } from '../models/ProductModel'

interface Props{
    items: IProduct[]
  }


const TopProducts:React.FC<Props> = ({items = []}) => {



  return (
    <section className='top-products container'>
        <div className='product-list'>
            <h2>Latest Product</h2>
            <div className='product'>
            {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />) 
            } 
            </div>
        </div>
        <div className='product-list'>
            <h2>Best Selling Product</h2>
            <div className='product'>
            {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />) 
            } 
            </div>
        </div>
        <div className='product-list'>
            <h2>Top Reacted Product</h2>
            <div className='product'>
            {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />) 
            } 
            </div>
        </div>
    </section> 
  )
}

export default TopProducts