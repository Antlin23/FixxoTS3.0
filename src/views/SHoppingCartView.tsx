import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

const ShoppingCartView: React.FC = () => {
  document.title = "Cart | Fixxo."
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default ShoppingCartView