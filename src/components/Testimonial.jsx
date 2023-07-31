import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonial = () => {
  return (
    <>
 <Carousel className="w-full overflow-hidden" autoPlay infiniteLoop showArrows={false} showStatus={false}>
    <div>
    <section className="py-10 bg-inherit sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <img className="object-cover w-32 h-32 mx-auto rounded-full testimonial-image" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt='image-text' />
      <p className="mt-6 text-lg font-semibold text-black">Mark Tanker, <span className="font-normal text-gray-600">California</span></p>
      <blockquote className="max-w-xl mx-auto mt-7">
        <p className="text-xl leading-relaxed text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
      </blockquote>
    </div>
  </div>
</section>
    </div>
    <div>
    <section className="py-10 bg-inherit sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <img className="object-cover w-32 h-32 mx-auto rounded-full testimonial-image" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt='image-test' />
      <p className="mt-6 text-lg font-semibold text-black">Mark Tanker, <span className="font-normal text-gray-600">California</span></p>
      <blockquote className="max-w-xl mx-auto mt-7">
        <p className="text-xl leading-relaxed text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
      </blockquote>
    </div>
  </div>
</section>
    </div>
    <div>
    <section className="py-10 bg-inherit sm:py-16 lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <img className="object-cover w-32 h-32 mx-auto rounded-full testimonial-image" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt='image-test' />
      <p className="mt-6 text-lg font-semibold text-black">Mark Tanker, <span className="font-normal text-gray-600">California</span></p>
      <blockquote className="max-w-xl mx-auto mt-7">
        <p className="text-xl leading-relaxed text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
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