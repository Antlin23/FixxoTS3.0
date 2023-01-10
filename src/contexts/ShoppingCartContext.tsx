import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { IShoppingCartProduct } from "../models/ProductModel";

interface Props{
    children: any
}

export interface IShoppingCartContext{
    items: IShoppingCartProduct[],
    totalQuantity: number,
    increment: (cartItem: IShoppingCartProduct) => void,
    decrement: (cartItem: IShoppingCartProduct) => void,
    remove: (articleNumber: string) => void
}

const ShoppingCartContext = createContext<IShoppingCartContext | null>(null)

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider: React.FC<Props> = ({children}) => {
    const [items, setItems] = useState<IShoppingCartProduct[]>([])

    const totalQuantity = items.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const increment = (cartItem: IShoppingCartProduct) => {
        const {articleNumber, product} = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null){
                return [...items, { articleNumber, product, quantity: 1 }]
            }
            else{
                return items.map(item => {
                   if(item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + 1 }
                   }
                   else {
                    return item
                   }
                })
            }
        })
    }

    const decrement = (cartItem: IShoppingCartProduct) => {
        const {articleNumber} = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1){
                return items.filter(item => item.articleNumber !== articleNumber)          
            }
            else{
                return items.map(item => {
                   if(item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity - 1 }
                   }
                   else {
                    return item
                   }
                })
            }
        })
    }

    const remove = (articleNumber: string) => {
        setItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{items, totalQuantity, increment, decrement, remove}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}