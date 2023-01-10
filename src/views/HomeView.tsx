import React, { useEffect } from 'react'
import Navbar from '../sections/Navbar';
import Showcase from '../sections/Showcase';
import NewArrivals from '../sections/NewArrivals';
import FeaturedProducts from '../sections/FeaturedProducts';
import Banners from '../sections/Banners'
import FlashSale from '../sections/FlashSale'
import IndexPolicy from '../sections/IndexPolicy'
import Footer from '../sections/Footer'
import SpecialityCards from '../sections/SpecialityCards'
import SalesBanner from '../sections/SalesBanner'
import TopProducts from '../sections/TopProducts'
import { ProductContextType, useProductContext } from '../contexts/ProductContexts';

const HomeView: React.FC = () => {
  document.title = "Fixxo."

  const {featured, getFeatured} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(4)
  }, [])
  

  return (
  <>
     <header style={{backgroundColor : "#E6E6E6"}}>
      <Navbar /> 
    </header> 
    <Showcase />
    <NewArrivals />
    <FeaturedProducts title={"Featured Products"} items={featured} /> 
    <Banners />
    <SpecialityCards />
    <FlashSale />
    <SalesBanner />
    {/* <TopProducts /> */}
    <hr className="container" />
    <IndexPolicy />
    <Footer /> 
  </>
  )
}

export default HomeView