import React from 'react'
import { IShoppingCartContext, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { IShoppingCartProduct } from '../models/ProductModel'
import './ShoppingCart.css'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart:React.FC = () => {
  const { items } = useShoppingCartContext() as IShoppingCartContext

  return (
    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvasRightLabel" id="shoppingCartLabel"> <i className="fa-regular fa-bag-shopping"> </i> Shopping Cart</h4>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {
          items.map((item: IShoppingCartProduct) => (<ShoppingCartItem key={item.articleNumber} item={item} />))
        }
      </div>
    </div>
  )
}

export default ShoppingCart