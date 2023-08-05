import React from 'react';
import Prof1 from '../assets/prof1.webp';
import Prof4 from '../assets/prof4.jpg';
import Prof6 from '../assets/prof6.webp';
import Prof5 from '../assets/prof5.jpg';

const TheBrains = () => {
  return (
<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Meet the Team</h2>
      <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Here are the individuals dedicated to securing your assets and investments.</p>
    </div>
    <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
      <div>
        <img className="object-cover mx-auto rounded-lg w-28 h-28" src={Prof4} alt='Prof4' />
        <p className="mt-8 text-lg font-semibold leading-tight text-black">Oliver Kant</p>
        <p className="mt-1 text-base leading-tight text-gray-600">Founder and CEO</p>
      </div>
      <div className="hidden lg:block" />
      <div>
        <img className="object-cover mx-auto rounded-lg w-28 h-28" src={Prof6} alt='Prof6' />
        <p className="mt-8 text-lg font-semibold leading-tight text-black">Darrell Steward</p>
        <p className="mt-1 text-base leading-tight text-gray-600">Chief Trading Officer</p>
      </div>
      <div className="hidden lg:block" />
      <div>
        <img className="object-cover mx-auto rounded-lg w-28 h-28" src={Prof5} alt='Prof5' />
        <p className="mt-8 text-lg font-semibold leading-tight text-black">Arlene McCoy</p>
        <p className="mt-1 text-base leading-tight text-gray-600">CMO</p>
      </div>
      <div className="hidden lg:block" />
      <div>
        <img className="object-cover mx-auto rounded-lg w-28 h-28" src={Prof1} alt='prof1' />
        <p className="mt-8 text-lg font-semibold leading-tight text-black">Benjamin McCoy</p>
        <p className="mt-1 text-base leading-tight text-gray-600">Senior Asset Manager</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default TheBrains