import React from "react";
import steps from "../assets/steps.jpg";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <section className="text-gray-600 body-font steps-bg">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Create a free account
                </h2>
                <p className="leading-relaxed">
                  Creating an account is a free and painless process. Complete
                  the registration form and get one step closer to earning.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Deposit Funds
                </h2>
                <p className="leading-relaxed">
                  Continue to make deposits on a range of plans available on
                  your account - as provided by the platform.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none" />
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx={12} cy={5} r={3} />
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Start Earning!
                </h2>
                <p className="leading-relaxed">
                  Start earning with a return on investment by the percentage of
                  the plans you made investments on. You also earn referral
                  bonuses and commissions.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  FINISH
                </h2>
                <p className="leading-relaxed">
                  Refer your friends, earn commission on each referral. Withdraw
                  your funds!.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.img
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src={steps}
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
