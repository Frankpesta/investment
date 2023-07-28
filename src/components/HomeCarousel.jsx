import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from "./CarouselItem";
import Cover1 from "../assets/cover1.png";
import Cover2 from "../assets/cover2.png";
import Cover3 from "../assets/cover3.png";

const HomeCarousel = () => {
  return (
    <>
    <Carousel className="w-full overflow-hidden mb-4 flex flex-col items-center justify-start" autoPlay infiniteLoop showArrows={false} showStatus={false}>
      <div>
        <CarouselItem
        header='You Grow, We Grow'
        subText='With Consistency, Success will follow'
        image={Cover1} />
      </div>
      <div>
        <CarouselItem
        header={`Don't Wait, Create Opportunity!`}
        subText='Start by investing with us today'
        image={Cover2} />
      </div>
      <div>
        <CarouselItem 
        header='Build your Portfolio with Us'
        subText='Advice that is always in your best interest.'
        image={Cover3} />
      </div>
    </Carousel>
    </>
  );
};

export default HomeCarousel;
