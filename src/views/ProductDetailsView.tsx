import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import './ProductDetailsView.css'
import SiteTitle from '../components/SiteTitle'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/ProductContexts'
import { IProduct, IProductContext, IProducts } from '../models/ProductModel'


const ProductDetailsView: React.FC = () => {

  const params = useParams()


  document.title = "Products | Fixxo."


  const [quantity, setQuantity] = useState(0)

  const increaseQuantity = () => {
    setQuantity(current => current + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 0)
    setQuantity(current => current - 1)

  }


  return (
    <>
    {/* navbar */}
    <Navbar />

    {/* popup message */}
    <section className='popup-box container'>
      Get 25% OFF at the Fixxo Selection - Shop Now!
    </section>

      {/* site title /breadcrumb */}
     <SiteTitle activePage={params.name} />   {/*activepage is set to string | undefined */}

    <section className='product-site container'>

      {/* product images */}
      <div className='images-container'>
      <div className='images '>
        <div className='item img-1'></div>
        <div className='item img-2'></div>
        <div className='item img-3'></div>
        <div className='item img-4'></div>
      </div>
      </div>

      {/* product description */}
      <div className='product-description'>
        {/* title */}
        <h1>{params.name}</h1>
        {/* sku and brand */}
        <div className='sku-brand'>
          SKU: 12345670 <span className='ms-2'>BRAND: The Northland</span>
        </div>
        {/* stars */}
        <div className="product-stars">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
        </div>
        {/* price */}
        <div className='price'>
          $35.00
        </div>
        {/* product-information */}
        <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably.
           Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<NavLink to="/">read more</NavLink>) 
        </p>
        {/* size selector */}
        <div className='size-selector mt-4'>
          <span className='label'>Size: </span>
          <button className='ms-5'>S</button>
          <button>M</button>
          <button>L</button>
          <button>X</button>
        </div>
        {/* color selector */}
        <div className='color-selector'>
          <span className='label'>Color:</span>
          <select id='color-selector'>
            <option value="value">Choose an option</option>
            <option>Blue</option>
            <option>Red</option>
            <option>Black</option>
          </select>
        </div>
        {/* quantity selector */}
        <div className='quantity-selector'>
          <span className='label'>Qty:</span>
            <button onClick={() => decreaseQuantity()} className='ms-5 qty-btn'>-</button>
            <span className='quantity'>{quantity}</span>
            <button onClick={() => increaseQuantity()} className='qty-btn'>+</button>
        </div>
        {/* add to cart button */}
        <button className='ms-4 theme-button'>ADD TO CART</button>
        {/* social media icons */}
        <div>
          <span className="label social-media-icons-label">Share: </span>
          <span className='social-media-icons'>
            <a href='https://www.facebook.com/' target="_blank"><i className='fa-brands fa-facebook-f circle-icon'></i></a>
            <a href='https://www.instagram.com/' target="_blank"><i className='fa-brands fa-instagram circle-icon'></i></a>
            <a href='https://twitter.com/' target="_blank"><i className='fa-brands fa-twitter circle-icon'></i></a>
            <a href='https://www.google.com/' target="_blank"><i className='fa-brands fa-google circle-icon'></i></a>
            <a href='https://www.linkedin.com/' target="_blank"><i className='fa-brands fa-linkedin circle-icon'></i></a>
          </span>
          
        </div>
      </div>
    </section>

      <div className='product-info container'>
        <div className='label'>
          Description
        </div>
        <p className='mt-3'>
          Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless.
          Calling offence six joy feeling. Coming merits and was talent enough far.
          Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
        <p>
          * Village did removed enjoyed explain nor ham saw calling talking.
          </p>
          <p>
          * Securing as informed declared or margaret.
          </p>
          <p>
          * Joy horrible moreover man feelings own shy.
        </p>
        <p>
        On even feet time have an no at. Relation so in confined smallest children unpacked delicate. 
        Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. 
        </p>
      </div>

      <div className='related-products container'>
        <div className='label'>
          Related Products
        </div> 
        <div className='product-card-container'>
        <div className='product-cards'>
        {/* {
          products.fourProducts.map((product: IProduct) => <ProductCard key={product.articleNumber} item={product} />) 
        }  */}
        </div>
        </div>
      </div>

    
    {/* footer */}
    <Footer />
  </>
  )
}

export default ProductDetailsView