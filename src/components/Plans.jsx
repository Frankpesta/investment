import React from 'react';
import { planDetails, RealEstatePlans } from '../constants/index';

const Plans = () => {
  return (
   <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">Our Investment Plans</h2>
      <h2 className='text-lg pt-2 leading-tight text-black uppercase sm:text-2xl lg:text-3xl'>Crypto Currency Plans</h2>
    </div>
    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-4">
        {planDetails.map((deets) => (
             <div key={deets.name} className="overflow-hidden bg-white border-2 border-gray-100 rounded-md h-fit">
               <div className="p-6 xl:px-12">
                 <h3 className="text-base font-bold text-teal-700">{deets.name}</h3>
                 <p className="mt-3 text-base text-gray-600">{deets.percentage} daily Profit</p>
                 <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Min: ${deets.min}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Max: ${deets.max}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Ref Commission: {deets.ref}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Duration: {deets.duration}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">{deets.withdrawal}</span>
                   </li>
                 </ul>
                 <button className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-teal-600 to-blue-400 hover:opacity-80 focus:opacity-80" role="button"> Get Started </button>
               </div>
             </div>  
        ))}
        </div>
        <p className='text-center text-lg font-bold pt-6'>REAL ESTATE PLANS</p>
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-2 text-center lg:max-w-full lg:mt-16 lg:grid-cols-4">
        {RealEstatePlans.map((deets) => (
             <div key={deets.name} className="overflow-hidden bg-white border-2 border-gray-100 rounded-md h-fit">
               <div className="p-6 xl:px-12">
                 <h3 className="text-base font-bold text-teal-700">{deets.name}</h3>
                 <p className="mt-3 text-base text-gray-600">{deets.percentage} Monthly Profit</p>
                 <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Min: ${deets.min}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Max: ${deets.max}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Ref Commission: {deets.ref}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">Duration: {deets.duration}</span>
                   </li>
                   <li className="inline-flex items-center space-x-2">
                     <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-base font-medium text-gray-900">{deets.withdrawal}</span>
                   </li>
                 </ul>
                 <button className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-teal-600 to-blue-400 hover:opacity-80 focus:opacity-80" role="button"> Get Started </button>
               </div>
             </div>  
        ))} 
        </div>
  </div>
</section>

  )
}

export default Plans