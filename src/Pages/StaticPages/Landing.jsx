import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Carousel from "../../components/HomeCarousel";
import Experience from "../../components/Experience";
// import TradingView from "../../components/TradingView";
import Steps from "../../components/Steps";
import SuccessComponents from "../../components/SuccessComponents";
import Plans from "../../components/Plans";
import Referral from "../../components/Referral";
import Partners from "../../components/Partners";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Carousel />
      {/* <TradingView /> */}
      <Experience />
      <Steps />
      <SuccessComponents />
      <Plans />
      <Referral />
      <Partners />
      <Footer />
    </div>
  );
}
