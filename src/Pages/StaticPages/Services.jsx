import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import {GiCheckMark} from 'react-icons/gi';
import Referral from "../../components/Referral";
const Services = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={"Services"} />
      <section className="my-8">
        <h2 className="font-bold text-2xl lg:text-3xl border-t text-center">
          WHAT WE OFFER...
        </h2>
        <p className="font-light text-center text-md py-6">
          At WealthBridgeAdvisors , we pride ourselves on our revolutionary "BlackBox"
          algorithm, a proprietary technology that predicts market trends with
          astonishing accuracy. Gain exclusive access to this powerful tool,
          giving you a distinct advantage in the investment world. Our algorithm
          guarantees consistent returns and helps you outperform the market
          effortlessly.
        </p>

        <div className="flex flex-col sm:gap-8 lg:flex-row my-12 bg-gray-300 p-12 lg:px-24">
          <h2 className="flex-1 font-bold text-2xl sm:pb-6">Management Services</h2>
          <div className="flex-1">
            <>
            <div className="flex items-center gap-2">
              <GiCheckMark color="teal" />
              <h2 className="font-bold text-xl text-teal-700">Portfolio Management</h2>
            </div>
            <p className="px-6 py-2 text-[14px]">If you prefer a hands-off approach, our portfolio management services are designed to meet your needs. Our experienced portfolio managers will construct and manage a customized investment portfolio based on your risk profile, investment objectives, and time horizon. Benefit from our expertise in asset allocation, diversification, and active management to optimize your returns</p>
            </>
            <>
            <div className="flex items-center gap-2">
              <GiCheckMark  color="teal" />
              <h2 className="font-bold text-xl text-teal-700">Wealth Management:</h2>
            </div>
            <p className="px-6 py-2 text-[14px]">Our wealth management services provide personalized strategies for your unique financial goals. Through careful assessment and planning, we aim to grow and protect your wealth. Our skilled advisors assist with asset allocation, risk management, tax planning, and estate planning. Maximize your financial potential with our comprehensive approach.</p>
            </>
            <>
            <div className="flex items-center gap-2">
              <GiCheckMark color="teal"/>
              <h2 className="font-bold text-xl text-teal-700">Hedge Fund Management:</h2>
            </div>
            <p className="px-6 py-2 text-[14px]">We are a leading hedge fund management company, delivering exceptional risk-adjusted returns through curated portfolios. Our experienced team employs rigorous analysis, research, and modeling to identify lucrative opportunities. With a focus on risk management and diversification, we aim for consistent above-average returns for our clients.</p>
            </>
          </div> 
        </div>

        <div className="flex flex-col sm:gap-8 lg:flex-row my-12 p-12 lg:px-24">
          <h2 className="flex-1 font-bold text-2xl sm:pb-6">Planning Services</h2>
          <div className="flex-1">
            <>
            <div className="flex items-center gap-2">
              <GiCheckMark color="teal" />
              <h2 className="font-bold text-xl text-teal-700">Retirement Planning:</h2>
            </div>
            <p className="px-6 py-2 text-[14px]">Plan for a secure financial future with our retirement planning services. Our expert team evaluates assets, projects income needs, and creates comprehensive retirement plans. We provide guidance on account management, asset allocation, and income distribution strategies. Ensure a comfortable and worry-free retirement with our dedicated expertise.</p>
            </>
            <>
            <div className="flex items-center gap-2">
              <GiCheckMark  color="teal" />
              <h2 className="font-bold text-xl text-teal-700">Tax Planning and Compliance:</h2>
            </div>
            <p className="px-6 py-2 text-[14px]">Simplify tax complexities with our comprehensive tax planning and compliance services. Our experts optimize tax efficiency while ensuring full compliance with regulations. Stay updated on tax laws and discover potential savings opportunities. Minimize tax liabilities with strategic implementation.</p>
            </>
            <>
            <div className="flex items-center gap-2">
              <GiCheckMark color="teal"/>
              <h2 className="font-bold text-xl text-teal-700">Estate Planning:</h2>
            </div>
            <p className="px-6 py-2 text-[14px]">Preserving and transferring your wealth to future generations requires careful estate planning. Our estate planning services help you develop a robust plan to protect your assets, minimize estate taxes, and ensure your legacy is preserved according to your wishes. We work closely with legal professionals to create trusts, wills, and other estate planning instruments that align with your unique circumstances and goals</p>
            </>
          </div> 
        </div>
      </section>
      <Referral />
      <Footer />
    </>
  );
};

export default Services;
