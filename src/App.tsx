import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import WishListView from './views/WishListView';
import CompareView from './views/CompareView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductDetailsView';

// Contexts
import { ProductContext } from './contexts/ProductContexts'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import { IProduct } from './models/ProductModel';
import UserProvider from './contexts/UserContext';



const App: React.FC = () => { 

  // const [allProducts, setAllProducts] = useState<IProduct[]>([])

  // const [fourProducts, setFourProducts] = useState<IProduct[]>([])

  // const [threeProducts, setThreeProducts] = useState<IProduct[]>([])

  // useEffect(() => {
  //   // get all products
  //     const fetchAllProducts = async () => {
  //     const result = await fetch('http://localhost:5000/api/products')
  //     const data = await result.json()
  //     setAllProducts(data)
  //   }
  //   fetchAllProducts()

  //   // get four products
  //   const fetchFourProducts = async () => {
  //     const result = await fetch('http://localhost:5000/api/products?take=4')
  //     const data = await result.json()
  //     setFourProducts(data)
  //   }
  //   fetchFourProducts()

  //     // get three products
  //     const fetchThreeProducts = async () => {
  //       const result = await fetch('http://localhost:5000/api/products?take=3')
  //       const data = await result.json()
  //       setThreeProducts(data)
  //     }
  //     fetchThreeProducts()

  // }, [])

  return (
    <BrowserRouter>
      <UserProvider>
      <ShoppingCartProvider>
          <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/categories' element={<CategoriesView />} />
            <Route path='/products' element={<ProductsView />} />
            <Route path='/products/:name' element={<ProductDetailsView />} />
            <Route path='/contacts' element={<ContactsView />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/compare" element={<CompareView />} />
            <Route path="/wishlist" element={<WishListView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
      </ShoppingCartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;