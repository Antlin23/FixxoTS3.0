import React, { useContext, useEffect,useState } from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import './ProductsView.css'
import SiteTitle from '../components/SiteTitle'
import ProductCard from '../components/ProductCard'
import { ProductContext, ProductContextType, useProductContext } from '../contexts/ProductContexts'
import { IProduct, IProductContext } from '../models/ProductModel'
import AllProducts from '../sections/AllProducts'


const ProductsView: React.FC = () => {
  document.title = "Products | Fixxo."

  const {products, getAll} = useProductContext() as ProductContextType

  useEffect(() => {
    getAll()
  }, [])

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

          <AllProducts items={products} />

      
      {/* footer */}
      <Footer />
    </>
  )
}

export default ProductsView