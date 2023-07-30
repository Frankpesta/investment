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
    <div className='m-12 text-center'>
      <h2 className='font-bold text-[25px]'>PACKAGES</h2>
      <p className='text-lg'>Logo Investment Financial Management gives investors the opportunity to choose from a variety of investment packages and earn every week.</p>
    </div>
    <Plans />
    <Footer />
    </>
  )
}

export default Packages