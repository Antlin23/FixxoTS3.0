import React, { useContext } from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import './ProductsView.css'
import SiteTitle from '../components/SiteTitle'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/ProductContexts'
import { IProduct, IProductContext } from '../models/ProductModel'

const ProductsView: React.FC = () => {
  document.title = "Products | Fixxo."

  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* popup message */}
      <section className='popup-box container'>
        Get 25% OFF at the Fixxo Selection - Shop Now!
      </section>

      {/* site title /breadcrumb */}
      <SiteTitle activePage="Products"/>

      <div className='all-products-system'>
        <div className="all-products-section">
            {/* {
              products.allProducts.map((product: IProduct) => <ProductCard key={product.articleNumber} item={product} />) 
            }  */}
        </div>
      </div>
      
      {/* footer */}
      <Footer />
    </>
  )
}

export default ProductsView