import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newyork from "../../assets/york.jpg";

const Insights = () => {
  return (
    <>
      <NavBar />
      <div className="text-center my-12 mx-12">
        <h2 className="text-black font-extra text-3xl lg:text-6xl pb-3 leading-normal">
          FEATURED INSIGHTS
        </h2>
        <p className="text-lg leading-relaxed pb-4 text-gray-500">
          WealthBridge Advisors is positioned to help our clients navigate the
          complex and dynamic financial world.
        </p>
      </div>

      <section
        className="text-gray-800 min-h-screen"
        style={{
          backgroundImage: "linear-gradient(35deg, #f2f2f7 50%, #fffffc 50%",
        }}
      >
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <p className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50">
            <img
              src={Newyork}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl  group-focus:underline">
                <p>
                  Fitch Downgrades the U.S. What does that Mean for Markets?
                </p>
              </h3>
              <p>
                Following Fitch Ratings's downgrade of the U.S. federal
                government’s credit score to AA+, WealthBridge Advisors Wealth Management
                dissects the market’s reaction, potential impacts on U.S.
                Treasury bonds in the global capital markets and the prospect of
                finding investment opportunities in the fixed-income market.
              </p>
            </div>
          </p>
          <div className="divider"></div>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <p className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  What Does the Downgrade Mean for Investors?
                </h3>
                <p>
                  It’s understandable that investors would use higher yields as
                  a reason to take profits in the equity market. Stocks were due
                  for a pullback, and higher yields can hurt earnings for
                  companies that have large borrowing needs.
                </p>
              </div>
            </p>
            <p className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Treasury Market’s Global Status Unaffected by Downgrade
                </h3>
                <p>
                  The downgrade is unlikely to impact the U.S. Treasury market's
                  status in the global capital markets. Treasuries have always
                  been and remain the largest high quality liquid pool of
                  risk-free government securities. There is no other developed
                  market rated AA+ or higher that can accommodate a sudden rush
                  of global demand during a risk-off event.
                </p>
              </div>
            </p>
            <p className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  How Did Markets React?
                </h3>
                <p>
                  The yield on the 10-year Treasury pushed through 4% this week
                  to highs not seen since November. While the downgrade
                  contributed to the volatility, the rise in yields (as bond
                  prices fell) was largely driven by the U.S. Treasury’s
                  announcement of some $1 trillion of net new supply for the
                  third quarter, as well as a strong private payroll report.
                </p>
              </div>
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 my-12">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
            <div className>
              <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-5xl">
                Market Trends
              </h2>
              <span className="font-bold pt-2 block">OUR VIEW</span>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our best-in-class custody franchise and diverse investment
                services help give our clients the power to make nimble,
                future-forward decisions on trading, collateral, funding and
                liquidity, and help ensure they stay ahead of what’s next.
              </p>
            </div>
            <div className="flex flex-col space-y-6 rounded-md sm:py-6 sm:p-8 lg:p-8 lg:w-full xl:w-full bg-gray-900 text-gray-50">
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Comprehensive Custody Solutions
                  </p>
                  <p className="leadi">
                    Our expertise in trading, collateral management, funding,
                    and liquidity ensures that you can make nimble and
                    future-forward decisions.
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Diverse Investment Services
                  </p>
                  <p className="leadi">
                    From trading strategies to collateral optimization, funding
                    solutions to liquidity management, we provide the tools you
                    need to navigate the financial landscape confidently and
                    proactively.
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    {" "}
                    Elevate Your Financial Strategy
                  </p>
                  <p className="leadi">
                    {" "}
                    Stay ahead of industry shifts, optimize your collateral, and
                    enhance liquidity management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#222222] sm:py-16 lg:py-24 my-12  text-white">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
            <div className>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
                Digital & Technology
              </h2>
              <span className="font-bold pt-4 block">OUR VIEW</span>
              <p className="mt-4 text-lg leading-relaxed text-white">
                At WebBridge Advisors, we use digital and technology to consider
                holistic processes, product and client interaction. It’s how we
                work safer, simpler and smarter. And it’s how we help our
                clients outpace the competition.
              </p>
            </div>
            <div className="flex flex-col space-y-6 rounded-md sm:py-6 sm:p-8 lg:p-8 lg:w-full xl:w-full text-gray-50">
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Embracing Digital Transformation
                  </p>
                  <p className="leading-relaxed">
                    By leveraging cutting-edge technology, we streamline
                    processes, enhance products, and elevate client
                    interactions. Our holistic approach empowers us to work
                    safer, simpler, and smarter, enabling our clients to outpace
                    the competition.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Smart Solutions for Modern Success
                  </p>
                  <p className="leading-relaxed">
                    Through our smart solutions, we operate with enhanced
                    efficiency, simplicity, and safety, driving our clients
                    towards a competitive edge.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2 ">
                  <p className="text-lg font-medium leadi">
                    {" "}
                    Redefining Client Experiences
                  </p>
                  <p className="leadi">
                    {" "}
                    Our holistic utilization of technology transforms how we
                    work, ensuring safety, simplicity, and intelligence.
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#fff] sm:py-16 lg:py-24 my-12  text-white">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
            <div className>
              <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-6xl">
                Regulatory & Risk
              </h2>
              <span className="font-bold pt-4 block text-black">OUR VIEW</span>
              <p className="mt-4 text-lg leading-relaxed text-black">
                Our industry faces an increasingly complex global regulatory
                landscape. How do we stay ahead? By thoughtfully managing
                regulation and developing risk-resilient technology, so our
                clients can feel secure no matter what comes their way.
              </p>
            </div>
            <div className="flex flex-col space-y-6 rounded-md sm:py-6 sm:p-8 lg:p-8 lg:w-full xl:w-full text-black">
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2">
                  <p className="text-lg font-medium leading-relaxed">
                    Navigating Global Regulations
                  </p>
                  <p className="leading-relaxed">
                    In the realm of Regulatory & Risk, we at WebBridge Advisors
                    recognize the intricate global regulatory landscape. Our
                    proactive approach involves astutely navigating through
                    these complexities. By thoughtfully interpreting and
                    managing regulations, we ensure compliance and provide our
                    clients with a secure foundation to operate within this
                    dynamic environment.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Building Resilient Risk Technology
                  </p>
                  <p className="leading-relaxed">
                    We craft risk-resilient technology solutions that fortify
                    our clients' positions in the market. By leveraging
                    innovative technology, we empower businesses to weather
                    uncertainties and challenges.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2 ">
                  <p className="text-lg font-medium leading-relaxed">
                    {" "}
                    Security Amidst Uncertainty
                  </p>
                  <p className="leading-relaxed">
                    {" "}
                    Embracing the Regulatory & Risk landscape, WebBridge
                    Advisors stands as a pillar of security for our clients. As
                    industries grapple with increasing complexities, we lead the
                    way by skillfully managing regulations and adopting
                    risk-aware technology. This proactive stance ensures our
                    clients' confidence, allowing them to stride forward with
                    the knowledge that their interests are safeguarded against
                    any eventuality.
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#00485E] sm:py-16 lg:py-24 my-12  text-white">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
            <div className>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-6xl">
                Sustainability
              </h2>
              <span className="font-bold pt-4 block">OUR VIEW</span>
              <p className="mt-4 text-lg leading-relaxed text-white">
                We take pride in addressing today’s global challenges
                proactively. Developing enduring relationships delivers value to
                our clients and communities, and sustainable economic growth
                protects markets, enhancing resiliency and creating a healthier,
                more sustainable world for us all.
              </p>
            </div>
            <div className="flex flex-col space-y-6 rounded-md sm:py-6 sm:p-8 lg:p-8 lg:w-full xl:w-full text-gray-50">
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Proactive Global Solutions
                  </p>
                  <p className="leading-relaxed">
                    At WebBridge Advisors, we proactively address global
                    challenges. Our enduring relationships deliver value to
                    clients and communities, fostering sustainable economic
                    growth that enhances market resiliency. Join us in creating
                    a healthier, more sustainable world.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Value through Sustainability
                  </p>
                  <p className="leading-relaxed">
                    WebBridge Advisors takes pride in delivering value through
                    sustainable practices. Our approach nurtures enduring
                    relationships and fosters resilient markets. Together, we
                    contribute to a healthier, more sustainable world.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg> */}
                <div className="space-y-2 ">
                  <p className="text-lg font-medium leadi">
                    {" "}
                    Sustainable Growth, Resilient Markets
                  </p>
                  <p className="leading-relaxed">
                    {" "}
                    Embrace sustainable economic growth with WebBridge Advisors.
                    Our approach not only benefits clients and communities but
                    also protects markets, enhancing their resiliency. Join us
                    in shaping a more sustainable world.
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Insights;
