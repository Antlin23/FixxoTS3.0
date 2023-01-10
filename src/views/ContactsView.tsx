import React from 'react'
import NavBar from '../sections/Navbar'
import Footer from '../sections/Footer'
import mapImg from '../assets/images/map_stockholm.svg'
import './ContactsViewStyle.css'
import ContactsForm from '../components/ContactsForm'
import { NavLink } from 'react-router-dom'
import SiteTitle from '../components/SiteTitle'
import MapSection from '../sections/MapSection'

const ContactsView: React.FC = () => {
  document.title = "Contacts | Fixxo."
  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      <section className='container'>
        {/* site title /breadcrumb */}
        <SiteTitle activePage="Contacts"/>
      </section>

      {/* map img */}
      <MapSection />

      {/* form */}
      <ContactsForm />

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default ContactsView