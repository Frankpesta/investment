import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="py-10 bg-teal-800 text-white sm:pt-16 lg:pt-24">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
      <div className="col-span-2 md:col-span-4 xl:pr-8">
        {/* <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt /> */}
        <h2>LOGO</h2>
        <p className="text-base leading-relaxed mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      </div>
      <div className="lg:col-span-2">
        <p className="text-base font-semibold">Company</p>
        <ul className="mt-6 space-y-5">
          <li>
            <Link to='/about' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> About </Link>
          </li>
          <li>
            <Link to='/services' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600">Services</Link>
          </li>
          <li>
            <Link to='/security' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600">Security</Link>
          </li>
          <li>
            <Link to='/packages' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600">Packages</Link>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-2">
        <p className="text-base font-semibold">Help</p>
        <ul className="mt-6 space-y-4">
          <li>
            <Link to='/contact' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Contact Us</Link>
          </li>
          <li>
            <Link to='/' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms &amp; Conditions </Link>
          </li>
          <li>
            <Link to='/' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </Link>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-2">
        <p className="text-base font-semibold">Resources</p>
        <ul className="mt-6 space-y-5">
          <li>
            <Link to='/auth/register' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600">Register</Link>
          </li>
          <li>
            <Link to='/auth/login' className="flex text-sm transition-all duration-200 hover:text-orange-600 focus:text-orange-600">Login</Link>
          </li>
        </ul>
      </div>
    </div>
    <hr className="mt-16 mb-10 border-white" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <p className="text-sm">© Copyright {date}, All Rights Reserved by Logo</p>
      
    </div>
  </div>
</section>

  );
};

export default Footer;
