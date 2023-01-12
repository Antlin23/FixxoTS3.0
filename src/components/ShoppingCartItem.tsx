import React from 'react'
import { IShoppingCartContext, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { IShoppingCartProduct } from '../models/ProductModel'
import fixxoClothes from '../images/fixxoClothes.jpg'

interface Props{
    item: IShoppingCartProduct
}

const ShoppingCartItem:React.FC<Props> = ({item}) => {
    const {increment, decrement, remove} = useShoppingCartContext() as IShoppingCartContext

  return (
    <div className='shoppingcart-item'>
        <div className='d-flex'>
            <div className='item-image'>
                <img src={fixxoClothes} alt={item.product.name}/>
            </div> 
            <div className='item-info'>
                <div className='item-info-name'> {item.product.name} </div>
                <div className='item-info-quantity'>
                    <button className='left-btn' onClick={() => decrement(item)}>-</button>
                    <span data-testid='quantity'>{item.quantity}</span>
                    <button className='right-btn' onClick={() => increment(item)}>+</button>
                </div>
            </div>
        </div>
        <div className='item-price'>
            <div>${item.product.price * item.quantity}</div>
            <button onClick={() => remove(item.product.articleNumber)}><i className="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartItem