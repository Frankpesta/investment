import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Test1 from '../assets/prof5.jpg';
import Test2 from '../assets/prof3.jpg'

const Testimonial = () => {
  return (
    <>
 <Carousel className="w-full overflow-hidden" autoPlay infiniteLoop showArrows={false} showStatus={false}>
    <div>
    <section className="py-10 bg-inherit sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="">
      <img className="object-cover w-32 h-32 mx-auto rounded-full testimonial-image" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt='image-text' />
      <p className="mt-6 text-lg font-semibold text-black">Mark Tanker, <span className="font-normal text-gray-200">California</span></p>
      <blockquote className="max-w-xl mx-auto mt-7">
        <p className="text-xl leading-relaxed text-black">"Impressed by WealthBridgeAdvisors' tailored retirement solutions. Their expertise in asset management ensures I'm on track to meet my goals. A reliable partner in securing my financial future."</p>
      </blockquote>
    </div>
  </div>
</section>
    </div>
    <div>
    <section className="py-10 bg-inherit sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="">
      <img className="object-cover w-32 h-32 mx-auto rounded-full testimonial-image" src={Test1} alt='image-test' />
      <p className="mt-6 text-lg font-semibold text-black"> Emily Johnson, <span className="font-normal text-gray-200">London, UK</span></p>
      <blockquote className="max-w-xl mx-auto mt-7">
        <p className="text-xl leading-relaxed text-black">"WealthBridgeAdvisors has been exceptional in guiding my retirement funds. Their personalized strategies and transparent communication provide me with confidence and peace of mind as I plan for the future."</p>
      </blockquote>
    </div>
  </div>
</section>
    </div>
    <div>
    <section className="py-10 bg-inherit sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="">
      <img className="object-cover w-32 h-32 mx-auto rounded-full testimonial-image" src={Test2} alt='image-test' />
      <p className="mt-6 text-lg font-semibold text-black">Shurajat Willi, <span className="font-normal text-gray-200">India</span></p>
      <blockquote className="max-w-xl mx-auto mt-7">
        <p className="text-xl leading-relaxed text-black">"WealthBridgeAdvisors' investment prowess shines in retirement planning. Their customized portfolio approach and dedication to optimizing returns make them a valuable ally for a prosperous retirement."</p>
      </blockquote>
    </div>
  </div>
</section>
    </div>
 </Carousel>
 </>
  )
}

export default Testimonial;