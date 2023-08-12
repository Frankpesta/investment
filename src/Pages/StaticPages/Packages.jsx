import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Plans from '../../components/Plans';

const Packages = () => {
  return (
    <>
    <Navbar />
    <PageHeader pageTitle={'Packages'} />
    <Plans />
    <Footer />
    </>
  )
}

export default Packages