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



export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <Experience />
      <Steps />
      <SuccessComponents />
      <Plans />
      <Referral />
      <Partners />
      <ChooseUs />
      <Footer />
    </div>
  );
}
