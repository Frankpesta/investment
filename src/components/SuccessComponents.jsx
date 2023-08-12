import React from "react";
import bgImg from '../assets/header-img.avif';


const SuccessComponents = () => {
  return (
 <section className="text-white body-font mt-8" style={{ backgroundImage: `url(${bgImg})`, objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backdropFilter: '' }}>
  <div className="container px-12 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-lg title-font mb-2 text-gray-100">What We Do.</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-100">This is why we stand out from the competition...</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-teal-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <h2 className="text-lg text-gray-100 font-medium title-font mb-2">Live Support 24/7</h2>
          <p className="leading-relaxed text-base">A team of professionals are always here to support you to ensure smooth and note-worthy experience with us.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-teal-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx={6} cy={6} r={3} />
              <circle cx={6} cy={18} r={3} />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
          </div>
          <h2 className="text-lg text-gray-100 font-medium title-font mb-2">Convenient Withdrawals</h2>
          <p className="leading-relaxed text-base">Withdraw your money in an instant using a wide range of available stress-free payment systems.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-teal-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
            </svg>
          </div>
          <h2 className="text-lg text-gray-100 font-medium title-font mb-2">Trading Efficiency</h2>
          <p className="leading-relaxed text-base">The high level of training of traders and the use of innovative methods of analytics and monitoring indicative exchange fluctuations allows for maximizing profits.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-teal-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </div>
          <h2 className="text-lg text-gray-100 font-medium title-font mb-2">Award Winning Platform</h2>
          <p className="leading-relaxed text-base">Award-winning software recognized by the industry’s most respected experts.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default SuccessComponents;
