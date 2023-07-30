import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import ContactComponent from '../../components/ContactComponent';

const Contact = () => {
  return (
    <>
    <Navbar />
    <PageHeader pageTitle={'Contact Us'} />
    <ContactComponent />
    <Footer />
    </>
  )
}

export default Contact