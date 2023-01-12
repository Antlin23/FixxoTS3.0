import { createContext, useContext, useState } from 'react'
import { IProduct } from '../models/ProductModel'

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: IProduct
    products: IProduct[]
    featured: IProduct[]
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

 const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: IProduct = {tag: '', description: '', articleNumber: '', name: '', category: '', price: 0, imageName: ''}

    const [product, setProduct] = useState<IProduct>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<IProduct[]>([])
    const [featured, setFeatured] = useState<IProduct[]>([])

    const get = async (articleNumber?: string) => {
        if(articleNumber !== undefined){
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {        
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if(take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
        

    }

    return <ProductContext.Provider value={{product, products, featured, get, getAll, getFeatured}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider