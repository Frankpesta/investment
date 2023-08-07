import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'
import { Link } from 'react-router-dom';
import Invest from '../assets/invest.json';

const Hero2 = () => {
  return (
   <div className="relative bg-gradient-to-b from-teal-50 to-teal-100">
  <section className="overflow-hidden">
    <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
      <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
        <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
          <div className="flex flex-col justify-between flex-1 h-full">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">Navigating Your <br /> Financial Journey</h1>
              <p className="mt-6 text-base text-black sm:text-xl">Welcome to WealthbridgeAdvisors, your trusted partner in crafting a secure and prosperous financial future. Our expert guidance and tailored strategies bridge the path to your wealth goals, ensuring a journey of growth, stability, and success..</p>
              <Link to='/auth/register' className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400" role="button"> Get started for free </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
        <div className="lg:absolute lg:bottom-0 lg:left-0">
         <Player autoplay loop src={Invest} />
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default Hero2