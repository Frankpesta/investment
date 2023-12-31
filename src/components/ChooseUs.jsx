import React from 'react'

const ChooseUs = () => {
  return (
<section className="py-10 sm:py-16 lg:py-20 my-8 steps-bg">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">Why Choose Us?</h2>
      <p className="mt-4 text-base leading-relaxed text-black">Because we’re easy to work with and the most cited reason to include them in any portfolio is their ability to reduce risk and add diversification.</p>
    </div>
    <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
      <div className="transition-all duration-200 bg-black hover:shadow-xl">
        <div className="py-10 px-9">
          <svg className="w-16 h-16 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h3 className="mt-8 text-lg font-semibold text-white">Trust and Transparency</h3>
          <p className="mt-4 text-base text-gray-100">At WealthBridgeAdvisors, we place the utmost importance on trust and transparency. We understand that entrusting your financial well-being to a firm requires confidence and reliability. That is why we adhere to the highest ethical standards, treating our clients' investments with the same care and diligence as our own.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-black hover:shadow-xl">
        <div className="py-10 px-9">
          <svg className="w-16 h-16 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <h3 className="mt-8 text-lg font-semibold text-white">Positive Impact</h3>
          <p className="mt-4 text-base text-gray-100">We believe in corporate social responsibility and actively engage in initiatives that promote sustainability, social welfare, and community development.Through partnerships with nonprofit organizations, volunteer programs, and responsible investment practices, we strive to contribute to a better future for all.</p>
        </div>
      </div>
      <div className="transition-all duration-200 bg-black hover:shadow-xl">
        <div className="py-10 px-9">
          <svg className="w-16 h-16 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h3 className="mt-8 text-lg font-semibold text-white">Education</h3>
          <p className="mt-4 text-base text-gray-100">Education is at the core of our philosophy. We believe that informed clients are empowered clients. As such, we offer a wide range of educational resources, including seminars, webinars, and personalized training sessions, to enhance our clients' financial literacy and equip them with the knowledge to make well-informed decisions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ChooseUs