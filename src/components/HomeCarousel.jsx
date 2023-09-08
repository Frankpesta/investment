import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from "./CarouselItem";
import Cover1 from "../assets/cover1.jpg";
import Cover2 from "../assets/cover2.jpg";
import Cover3 from "../assets/cover3.jpg";

const HomeCarousel = () => {
  return (
    <>
    <Carousel className="w-full overflow-hidden mb-4 flex flex-col items-center justify-start" autoPlay infiniteLoop showArrows={false} showStatus={false}>
      <div>
        <CarouselItem
        header='Unleash Your Wealth Potential'
        subText='Elevate your investments with Wealthbridge guidance'
        image={Cover1} />
      </div>
      <div>
        <CarouselItem
        header={`Navigate to Financial Success`}
        subText='Tailored strategies for your journey to prosperity.'
        image={Cover2} />
      </div>
      <div>
        <CarouselItem 
        header='Confidence in Every Investment'
        subText={` Invest with Wealthbridge's expertise by your side.`}
        image={Cover3} />
      </div>
    </Carousel>
    </>
  );
};

export default HomeCarousel;
