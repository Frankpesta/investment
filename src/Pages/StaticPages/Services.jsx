import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Referral from "../../components/Referral";
import estate from '../../assets/estate.jpg';
import wealth from '../../assets/wealth.jpg';
import retire from '../../assets/retire.jpg';
import hedge from '../../assets/hedge.jpg';
import tax from '../../assets/tax.jpg';
import savings from '../../assets/savings.jpg'
const Services = () => {
  return (
    <>
      <Navbar />
      <PageHeader pageTitle={"Services"} />
      <section className="my-8 py-6">
        <h2 className="font-bold text-2xl lg:text-3xl text-center text-teal-600">
          WHAT WE OFFER...
        </h2>
        <p className="font-light text-center text-md py-6 mx-4">
          At WealthBridgeAdvisors , we pride ourselves on our revolutionary
          "BlackBox" algorithm, a proprietary technology that predicts market
          trends with astonishing accuracy. Gain exclusive access to this
          powerful tool, giving you a distinct advantage in the investment
          world. Our algorithm guarantees consistent returns and helps you
          outperform the market effortlessly.
        </p>
        <div className="container mx-auto space-y-12 pt-8">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={retire}
              alt="wealth"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Portfolio Management
              </h3>
              <p className="my-6 text-gray-600">
              If you prefer a hands-off approach, our portfolio management services are designed to meet your needs. Our experienced portfolio managers will construct and manage a customized investment portfolio based on your risk profile, investment objectives, and time horizon. Benefit from our expertise in asset allocation, diversification, and active management to optimize your returns
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={wealth}
              alt=""
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                Wealth Management
              </h3>
              <p className="my-6 text-gray-600">
              Our wealth management services provide personalized strategies for your unique financial goals. Through careful assessment and planning, we aim to grow and protect your wealth. Our skilled advisors assist with asset allocation, risk management, tax planning, and estate planning. Maximize your financial potential with our comprehensive approach.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={hedge}
              alt="hedge"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Hedge Fund Management
              </h3>
              <p className="my-6 text-gray-600">
              We are a leading hedge fund management company, delivering exceptional risk-adjusted returns through curated portfolios. Our experienced team employs rigorous analysis, research, and modeling to identify lucrative opportunities. With a focus on risk management and diversification, we aim for consistent above-average returns for our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto space-y-12 mt-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={savings}
              alt="retire"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Retirement Planning:
              </h3>
              <p className="my-6 text-gray-600">
              Plan for a secure financial future with our retirement planning services. Our expert team evaluates assets, projects income needs, and creates comprehensive retirement plans. We provide guidance on account management, asset allocation, and income distribution strategies. Ensure a comfortable and worry-free retirement with our dedicated expertise.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src={tax}
              alt="tax"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Tax Planning and Compliance:
              </h3>
              <p className="my-6 text-gray-600">
              Simplify tax complexities with our comprehensive tax planning and compliance services. Our experts optimize tax efficiency while ensuring full compliance with regulations. Stay updated on tax laws and discover potential savings opportunities. Minimize tax liabilities with strategic implementation.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src={estate}
              alt="tax"
              className="h-80 bg-gray-500 object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Estate Planning:
              </h3>
              <p className="my-6 text-gray-600">
              Preserving and transferring your wealth to future generations requires careful estate planning. Our estate planning services help you develop a robust plan to protect your assets, minimize estate taxes, and ensure your legacy is preserved according to your wishes. We work closely with legal professionals to create trusts, wills, and other estate planning instruments that align with your unique circumstances and goals
              </p>
            </div>
          </div>
        </div>
      </section>
      <Referral />
      <Footer />
    </>
  );
};

export default Services;
