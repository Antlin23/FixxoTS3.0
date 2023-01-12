import React, { useContext } from 'react'
import './Featured_products.css'
import ProductCard from '../components/ProductCard';
import { IProduct } from '../models/ProductModel';

interface Props{
  title: string,
  items: IProduct[]
}

const FeaturedProducts: React.FC<Props> = ({title, items = []}) => {

  return (
    <>
    {/* title */}
    <div className="title">{title}</div>
    <section className='featured-products'>

      <div className='featured-products-system'>
        <div className="featured-product-section me-4">
            {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />) 
            } 
        </div>
      </div>

      <div className='featured-products-system'>
        <div className="featured-product-section">
            {
              items.map((product: IProduct) => <ProductCard key={product.articleNumber} item={product} />) 
            } 
        </div>
      </div>
      
    </section>
    </>
  )
}

export default FeaturedProducts