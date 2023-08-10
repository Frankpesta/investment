import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routeObj } from "../../constants/routes";
import Layout from "../../layouts/Layout";

export default function Deposit() {
  return (
    <Layout>
      <section className="pt-6">
        <div className="max-w-2xl mx-auto text-center pb-6">
          <h2 className="text-xl font-bold leading-tight text-black sm:text-xl lg:text-xl">
            CRYPTO PLANS
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="bg-white border-4 border-teal-600 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-800">BASIC</h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $200</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $19,999</p>
                <p className="mt-2 font-bold text-teal-600">
                  DURATION: 3 MONTHS
                </p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Basic"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white border-4 border-teal-800 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-600">REGULAR</h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $20,000</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $99,999</p>
                <p className="mt-2 font-bold text-teal-600">
                  DURATION: 6 MONTHS
                </p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Regular"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white border-4 border-teal-800 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-600">
                  STANDARD
                </h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $100,000</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $999,999</p>
                <p className="mt-2 font-bold text-teal-600">
                  DURATION: 3 MONTHS
                </p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Standard"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white border-4 border-teal-800 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-600">PREMIUM</h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $1,000, 000</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $UNLIMITED</p>
                <p className="mt-2 font-bold text-teal-600">
                  DURATION: 6 MONTHS
                </p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Premium"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center pb-6 pt-4">
          <h2 className="text-xl font-bold leading-tight text-black sm:text-xl lg:text-xl">
            REAL ESTATE PLANS
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="bg-white border-4 border-teal-800 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-600">BRONZE</h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $5,000</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $49,999</p>
                <p className="mt-2 font-bold text-teal-600">
                  DURATION: 6 MONTHS
                </p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Bronze"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white border-4 border-teal-800 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-600">SILVER</h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $50,000</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $99,999</p>
                <p className="mt-2 font-bold text-teal-600">
                  DURATION: 9 MONTHS
                </p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Silver"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white border-4 border-teal-800 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-600">GOLD</h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $100,000</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $999,999</p>
                <p className="mt-2 font-bold text-teal-600">DURATION: 1 YEAR</p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Gold"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white border-4 border-teal-800 rounded-md shadow-md">
            <div className="p-3 md:py-6 md:px-9">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-center">
                <h3 className="text-sm font-semibold text-teal-600">DIAMOND</h3>
              </div>
              <div className="text-center">
                <div className="divider" />
                <p className="mt-2 font-bold text-teal-600">MIN: $1,000, 000</p>
                <p className="mt-2 font-bold text-teal-600">MAX: $UNLIMITED</p>
                <p className="mt-2 font-bold text-teal-600">
                  DURATION: 2 YEARS
                </p>
              </div>
              <Link to={`${routeObj.depositytpe}${"Diamond"}`}>
                <button className="btn btn-primary w-full text-white mt-4">
                  Deposit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
