import React from 'react';
import logo1 from '../assets/logobin.png';
import logo2 from '../assets/logocoin.png';
import logo3 from '../assets/logoftx.png';
import logo4 from '../assets/logometa.png';
import logo5 from '../assets/huboi.png';
import logo6 from '../assets/bitfinex.jpg';
import logo7 from '../assets/bitpay.png';
import logo8 from '../assets/blockchain.png';


const Partners = () => {
  return (
<section className="py-10 bg-white sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">Trusted by world class companies, Expert teams &amp; Professionals</h2>
    </div>
    <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-8">
      <div>
        <img className="object-contain w-full h-30 mx-auto" src={logo1} alt='logo' />
      </div>
      <div>
        <img className="object-contain w-full h-25 mx-auto" src={logo2} alt='logo' />
      </div>
      <div>
        <img className="object-contain w-full h-25 mx-auto" src={logo3} alt='logo' />
      </div>
      <div>
        <img className="object-contain w-full mx-auto h-25" src={logo5} alt='logo' />
      </div>
      <div>
        <img className="object-contain w-full h-30 mx-auto" src={logo8} alt='logo' />
      </div>
      <div className=''>
        <img className="object-contain w-full h-25 mx-auto" src={logo4} alt='logo' />
      </div>
      <div className="">
        <img className="object-contain w-full h-20 mx-auto" src={logo6} alt='logo' />
      </div>
      <div className="">
        <img className="object-contain w-full h-20 mx-auto" src={logo7} alt='logo' />
      </div>
    </div>
    <p className="mt-10 text-base text-center text-gray-500 md:mt-20">and, 1000+ more companies</p>
  </div>
</section>


  )
}

export default Partners