import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import ChooseUs from '../../components/ChooseUs';
import TheBrains from '../../components/TheBrains';

const About = () => {
  return (
    <>
    <Navbar />
    <PageHeader pageTitle={"About Us"} />
    <div className='mt-4 mx-12'>
      <h2 className='font-bold text-[26px] py-8'>About Us</h2>
      <p className='text-md leading-relaxed'>Welcome to WealthBridgeAdvisors Investment Management Limited, a leading securities trading and financial management company dedicated to helping individuals and businesses navigate the complexities of the financial world. WealthBridgeAdvisors with Company Number 02023474 first Incorporated on 16 May 1986, initially as an enterprise risk management and fixed income institutional asset manager, is one of the world's largest asset manager, with US$8.59 trillion in assets under management as of December 31, 2022. We operate globally with clients in 100 countries.</p>
      <p className='pt-4 text-md leading-relaxed'>
      WealthBridgeAdvisors Investment Management Limited is a long term, stable and profitable investment company. Currently we have a number of profitable areas, such as real estate, Forex market trading, Stock market trading, Cryptocurrency market trading and investing in various funds and activities. Profits from these investments are used to enhance our program and increase its stability for the long term. Our high skilled and talented team of traders with unique tactics and strategies based on invaluable wealth of experience can make that your money will work for you under their skilled and careful management.
      </p>
      <p className='leading-relaxed pt-2 text-md'>
      Our team consists of highly skilled professionals who possess deep industry knowledge and a track record of success. Our financial advisors, portfolio managers, and analysts bring a wealth of experience from diverse backgrounds, ensuring that we can deliver comprehensive and innovative strategies to our clients. We pride ourselves on our commitment to continuous learning, staying up to date with the latest market trends, regulatory changes, and industry best practices to provide our clients with the highest level of service.
      </p>
    </div>
    <ChooseUs />
    <TheBrains />
    <Footer />
    </>
  )
}

export default About