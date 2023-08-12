import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import PageHeader from "./PageHeader";

const Terms = () => {
  return (
  <>
  <NavBar />
  <PageHeader pageTitle={"Terms & Conditions"} />

  <div className="my-4 mx-12">
    <h2 className="font-bold text-2xl lg:text-3xl leading-relaxed pb-4">Our Terms and Conditions</h2>
    <p className="font-bold text-lg leading-relaxed">Please read the following rules carefully before signing in.</p>

    <div className="text-lg leading-relaxed">
        <p className="py-4">You agree to be of legal age in your country to partake in this program, and in all the cases your minimal age must be 18 years except for the Childen programme.</p>

        <p className="py-4">WealthBridge Advisors is not available to the general public and is opened only to the verified members of WealthBridge Advsiors, the use of this platform is restricted to our members and to individuals personally invited by them. Every deposit is considered to be a private transaction between WealthBridge Advisors and its Members.</p>

        <p className="py-4">As a private transaction, this program is exempt from the US Securities Act of 1933, the US Securities Exchange Act of 1934 and the US Investment Company Act of 1940 and all other rules, regulations and amendments thereof. We are not FDIC insured. We are not a licensed bank or a security firm.</p>

        <p className="py-4">You agree that all information, communications, materials coming from WealthBridge Advisors are unsolicited and must be kept private, confidential and protected from any disclosure. Moreover, the information, communications and materials contained herein are not to be regarded as an offer, nor a solicitation for investments in any jurisdiction which deems non-public offers or solicitations unlawful, nor to any person to whom it will be unlawful to make such offer or solicitation.</p>

        <p className="py-4">All the data giving by a member to WealthBridge Advisors will be only privately used and not disclosed to any third parties. WealthBridge Advisors is not responsible or liable for any loss of data.</p>

        <p className="py-4">You agree to hold all principals and members harmless of any liability. You are investing at your own risk and you agree that a past performance is not an explicit guarantee for the same future performance. You agree that all information, communications and materials you will find on this site are intended to be regarded as an informational and educational matter and not an investment advice.</p>

        <p className="py-4">We reserve the right to change the rules, commissions and rates of the program at any time and at our sole discretion without notice, especially in order to respect the integrity and security of the members' interests. You agree that it is your sole responsibility to review the current terms.</p>

        <p className="py-4">WealthBridge Advisors is not responsible or liable for any damages, losses and costs resulting from any violation of the conditions and terms and/or use of our website by a member. You guarantee to WealthBridge Advisors that you will not use this platform in any illegal way and you agree to respect your local, national and international laws.</p>

        <p className="py-4">Don't post bad vote on Public Forums and at Gold Rating Site without contacting the administrator of our program FIRST. Maybe there was a technical problem with your transaction, so please always CLEAR the challenge with the administrator.</p>

        <p className="py-4">We will not tolerate SPAM or any type of UCE in this program. SPAM violators will be immediately and permanently removed from the program</p>

        <p className="py-4">WealthBridge Management reserves the right to accept or decline any member for membership without explanation.</p>

        <p className="py-4">If you do not agree with the above disclaimer, please do not go any further.</p>
    </div>
  </div>
  <Footer />
  </>
  );
};

export default Terms;
