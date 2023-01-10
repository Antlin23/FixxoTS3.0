import React, { useState } from 'react'
import './ProductCard.css'
import { NavLink } from 'react-router-dom';
import { IShoppingCartContext, useShoppingCartContext } from '../contexts/ShoppingCartContext';
import { IProduct } from '../models/ProductModel';

interface Props{
    item: IProduct
}

const ProductCard:React.FC<Props> = ({item}) => {

    const { increment } = useShoppingCartContext() as IShoppingCartContext

  return (
    <div className="product">
        
        {/* image part of card */}
        <div className="card">
        <img src={item.imageName} alt={item.name} />
            {/* quick view button */}
            <NavLink to={`/products/${item.name.replace(/ /gi, "-").toLowerCase()}`} className='quick-view'>QUICK VIEW</NavLink>
            {/* <!-- icons --> */}
            <div className="card-icons">
                <button><i className="fa-regular fa-heart"></i></button>
                <button><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
                {/* make sure "quantity: 1" works when errors is solved ****************************************************************************************** */}
                <button data-testid="addToCart" onClick={() => increment({articleNumber: item.articleNumber, product: item, quantity: 1})}><i className="fa-regular fa-bag-shopping"></i></button> 
            </div>
        </div>

            {/* <!-- category --> */}
            <div className="card-category">{item.category}</div>
            {/* <!-- product Name --> */}
           <h1>{item.name}</h1>
            {/* <!-- stars --> */}
            <div className="card-stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
        {/* <!-- price --> */}
        <div className="card-price">${item.price}.00</div>
    </div>
  )
}

export default ProductCard