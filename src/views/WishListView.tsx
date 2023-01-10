import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

const WishListView: React.FC = () => {
  document.title = "Wish List | Fixxo."
  return (
    <>
        <Navbar />
          Wishlist - Coming Soon
        <Footer />
    </>
  )
}

export default WishListView