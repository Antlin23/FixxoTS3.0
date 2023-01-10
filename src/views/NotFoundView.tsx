import React from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

const NotFoundView: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1>404 - Page not found</h1>
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <Footer />
      </div>
    </>

  )
}

export default NotFoundView 