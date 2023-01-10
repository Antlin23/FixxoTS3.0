export interface IProduct{
    tag: string,
    description: string,
    name: string,
    imageName: string,
    articleNumber: string,
    category: string,
    price: number
}

export interface IProducts{
    products: IProduct[]
}

export interface IProductContext{
    allProducts: IProduct[],
    fourProducts: IProduct[],
    threeProducts: IProduct[]
}

export interface IShoppingCartProduct{
    articleNumber: string,
    product: IProduct,
    quantity: number
}

export interface IShoppingCartProducts {
    cartItems: IShoppingCartProduct[]
}