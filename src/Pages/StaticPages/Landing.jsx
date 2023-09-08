import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Experience from "../../components/Experience";
import Steps from "../../components/Steps";
import SuccessComponents from "../../components/SuccessComponents";
import Plans from "../../components/Plans";
import Referral from "../../components/Referral";
import Partners from "../../components/Partners";
import ChooseUs from '../../components/ChooseUs';
import Hero2 from "../../components/Hero2";
import HomeCarousel from '../../components/HomeCarousel';
import Marquee from "../../components/Marquee";
import TradingView from "../../components/TradingView";
import Crypto from "../../components/Crypto";



export default function Landing() {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <Crypto />
      {/* <Marquee /> */}
      {/* <Hero2 /> */}
      <Experience />
      <Steps />
      <SuccessComponents />
      <Plans />
      <Referral />
      <Partners />
      <ChooseUs />
      <TradingView />
      <Footer />
    </div>
  );
}
