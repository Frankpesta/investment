import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import people from "../../assets/peoples.jpg";
import peoples from "../../assets/people.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center my-12 mx-12">
        <h2 className="text-black font-extra text-3xl lg:text-6xl pb-3 leading-normal">
          ABOUT US
        </h2>
        <p className="text-lg leading-relaxed text-center pb-4 text-gray-500">
          We power success across the <br /> financial world for individuals{" "}
          <br /> and institutions through unique insights, thinking and actions.
        </p>
      </div>

      <section
        className="min-h-fit "
        style={{
          backgroundImage: "linear-gradient(25deg, #00485E 30%, #f2f2f2 50%",
        }}
      >
        <div className="px-12 py-24 flex gap-12 flex-row items-center text-black">
          <div className="py-12 lg:w-1/2">
            <h2 className="font-extrabold text-3xl lg:text-5xl leading relaxed">
              <i>Powering</i> the Financial World
            </h2>
            <p className="py-4 leading-relaxed text-lg">
              Businesses, communities and global economies rely on us because we
              prioritize client experience, collaboration, innovation and
              resilience. As the “bank of banks,” our unique perspective,
              informed by one of the largest datasets in the world, powers the
              financial industry. At WealthBridge Advisors, we understand the
              best way to succeed at anything is to Consider Everything.
            </p>
          </div>
          <div className="hidden lg:block flex-auto">
            <div className="card w-96 glass">
              <div className="card-body">
                <h2 className="card-title">WealthBridge Advisors</h2>
                <p>
                  Businesses, communities, and global economies trust us to lead
                  the way. With our focus on client experience, collaboration,
                  innovation, and resilience, we stand as a pillar of strength.
                  As the "bank of banks," our unmatched perspective, driven by
                  vast data insights, fuels the financial industry's growth. At
                  WealthBridge Advisors, we believe in the power of considering
                  everything to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24 my-12  text-black">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
            <div className>
              <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-6xl pb-4">
                Relentlessly Client-Focused
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-black pb-4">
                We know it’s not enough to say we’re relentlessly
                client-focused—so we prove it every day, through adaptability,
                ingenuity and technology. It’s how we can proactively respond to
                environmental, social and governance developments, all while
                providing peerless client experiences.
              </p>
            </div>
            <div className="flex flex-col space-y-6 rounded-md sm:py-6 sm:p-8 lg:p-8 lg:w-full xl:w-full text-black">
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-bold leading-relaxed">
                    Our Culture
                  </p>
                  <p className="leading-relaxed">
                    Our purpose, values and behaviors are the core of WebBridge
                    Advisor's culture. We are committed to weaving these words
                    into a dynamic story of growth.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2">
                  <p className="text-lg font-bold leading-relaxed">
                    Our Leadership
                  </p>
                  <p className="leading-relaxed">
                    New ideas are born from new perspectives. The varied
                    backgrounds of our leadership team ensure that our clients
                    and the industry benefit from a wide array of insights.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2 ">
                  <p className="text-lg font-bold leading-relaxed">
                    {" "}
                    Our People
                  </p>
                  <p className="leadi">
                    {" "}
                    Guided by values and behaviors focused on excellence,
                    integrity, diversity and leadership, our global team brings
                    unique perspectives, experiences and skills to pioneer a new
                    generation of financial services.
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex space-x-2 sm:space-x-4">
                <div className="space-y-2 ">
                  <p className="text-lg font-bold leading-relaxed">
                    {" "}
                    Our History
                  </p>
                  <p className="leadi">
                    {" "}
                    Our History Ever since our founding, we’ve been committed to
                    pioneering new roads in the financial industry.
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </section>

      <section className=" -mt-12 lg:py-24 pb-12">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Numbers tell our story
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-teal-900"> $46.9 </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                trillion assets under custody and/or administration*
              </p>
            </div>
            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-teal-900"> $1.9 </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                trillion assets under management*
              </p>
            </div>
            <div>
              <h3 className="font-bold text-7xl">
                <span className="text-teal-900"> 35+ </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                Countries
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                Reached over the years
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-gray-800 pb-24"
        style={{
          backgroundImage: "linear-gradient(35deg, #fffffc 50%, #f2f2f7 50%",
        }}
      >
        <div className="grid lg:grid-cols-2 mx-12">
          <div className="lg:col-start-2 gap-12">
            <div className="flex space-x-2 sm:space-x-4 space-y-24">
              <div className="space-y-2 py-4">
                <p className="text-4xl font-bold leading-relaxed">
                  {" "}
                  Unique Perspective
                </p>
                <p className="leading-relaxed">
                  {" "}
                  With a global view across trillions of dollars in assets and
                  access to one of the world’s largest financial datasets, we
                  can see what others can’t. This unique market intelligence
                  helps us deliver valuable insights, identify trends and
                  innovate new ideas—all in the service of our clients.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4 pt-12">
              <div className="space-y-12 ">
                <p className="text-lg font-bold leading-relaxed"> Insights</p>
                <p className="leading-relaxed">
                  {" "}
                  Our experts’ highly attuned skill sets empower WealthBridge
                  Advisors to identify trends and insights that help improve
                  outcomes for clients and the industry as a whole.
                </p>
              </div>
            </div>
            <hr />
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-12 ">
                <p className="text-lg font-bold leading-relaxed pt-24">
                  {" "}
                  Technology and Innovation
                </p>
                <p className="leadi">
                  {" "}
                  We’re always investing in what’s next, exploring every
                  opportunity that will give our clients an edge.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="mt-10 lg:col-start-1 lg:row-start-1">
            <img
              src={people}
              alt=""
              className="w-fit h-[80%] rounded-lg shadow-lg bg-gray-500"
            />
          </div>
        </div>
      </section>

      <section
        className="text-gray-800"
        style={{
          backgroundImage: "linear-gradient(35deg, #fffffc 50%, #f2f2f7 50%",
        }}
      >
        <div className="grid lg:grid-cols-2 mx-12 gap-12">
          <div className="lg:col-start-1 ">
            <div className="flex space-x-2 sm:space-x-4 space-y-24">
              <div className="space-y-2 py-4">
                <p className="text-4xl font-bold leading-relaxed">
                  {" "}
                  Open and Objective
                </p>
                <p className="leading-relaxed">
                  {" "}
                  We innovate and collaborate with some of the most influential
                  partners in the world—including our own competitors—to support
                  our clients in reaching new heights. Our open-architecture
                  enterprise platform helps us uncover compelling insights and
                  engineer optimal client experiences to unlock new potential
                  for all.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4 pt-12">
              <div className="space-y-12 ">
                <p className="text-lg font-bold leading-relaxed">
                  {" "}
                  Global Impact
                </p>
                <p className="leading-relaxed">
                  {" "}
                  At WealthBridge Advisors, we harness our reach, market
                  influence and resources to help address critical
                  Environmental, Social and Governance (ESG) issues that impact
                  our world.
                </p>
              </div>
            </div>
            <hr />
            <div className="flex space-x-2 sm:space-x-4">
              <div className="space-y-12 ">
                <p className="text-lg font-bold leading-relaxed pt-24">
                  {" "}
                  Our Solutions
                </p>
                <p className="leading-relaxed">
                  {" "}
                  We leverage collaboration and breakthrough technologies to
                  provide tailored solutions to our clients so they can succeed.
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="mt-10 lg:col-start-2 lg:row-start-1">
            <img
              src={peoples}
              alt="/"
              className="w-fit rounded-lg shadow-lg bg-gray-500"
            />
          </div>
        </div>
      </section>

      <section className="my-24  mx-8 lg:mx-24 flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">
        <div>
          <h2 className="text-xl font-extrabold">Partner with Us</h2>
          <p className="text-lg leading-relaxed">
            Take your next step in your financial breakthrough...
          </p>
          <Link to='/auth/login' className="font-bold py-4">Start Now</Link>
        </div>
        <div>
          <h2 className="text-xl font-bold">See Offers</h2>
          <p className="text-lg leading-relaxed">Check out selection of offers</p>
          <Link to='/packages' className="font-bold py-4">Start Now</Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
