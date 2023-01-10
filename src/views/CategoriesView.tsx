import React from 'react'
import CreateForm from '../components/CreateForm'
import UserList from '../components/ProductsList'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

const CategoriesView: React.FC = () => {
  document.title = "Categories | Fixxo."
  return (
    <>
    <Navbar />
      <CreateForm />
      <UserList />
    <Footer />
    </>
  )
}

export default CategoriesView