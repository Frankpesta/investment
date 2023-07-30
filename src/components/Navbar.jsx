import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {GrClose} from 'react-icons/gr';
import {AiOutlineMenu} from 'react-icons/ai';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow-lg">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-black">LOGO</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <GrClose color="black" size={25} />
                  
                ) : (
                  <AiOutlineMenu color="black" size={25} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 uppercase font-semibold text-[14px]">
              <li className="text-black hover:text-teal-700">
                <NavLink to='/home'>Home</NavLink>
              </li>
              <li className="text-black hover:text-teal-700">
                <NavLink to='/security'>Security</NavLink>
              </li>
              <li className="text-black hover:text-teal-700">
                <NavLink to='/packages'>Packages</NavLink>
              </li>
              <li className="text-black hover:text-teal-700">
                <NavLink to='/services'>Services</NavLink>
              </li>
              <li className="text-black hover:text-teal-700">
                <NavLink to='/faqs'>FAQs</NavLink>
              </li>
              <li className="text-black hover:text-teal-700">
                <NavLink to='/about'>About Us</NavLink>
              </li>
              <li className="text-black hover:text-teal-700">
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>

            <div className="mt-3 space-y-6 lg:hidden md:inline-block">
              <Link
              to='/auth/login'
                // className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                <button className="btn btn-primary w-full text-white">Login</button>
              </Link>
              <Link
                // to='/auth/register'
                // className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                <button className="btn btn-outline w-full text-black">Register</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden space-x-8 md:inline-block">
          <Link
            to='/auth/login'
            // className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 duration-500"
          >
            <button className="btn btn-primary text-white">Login</button>
          </Link>
          <Link
            to='/auth/register'
            // className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            <button className="btn btn-outline text-black">Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
