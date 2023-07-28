import React from 'react';

const CarouselItem = ({ image, header, subText }) => {
  return (
    <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${image})`, objectFit: 'cover'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="text-neutral-content w-[90%] md:w-3/4">
      <div className='flex flex-col items-start justify-start'>
        <h1 className='text-[1.9rem] md:text-[2.5rem] font-bold mb-6'>{header}</h1>
        <h2 className="mb-5 text-[1rem]">{subText}</h2>
        <div className='flex items-center gap-4'>
        <button className="btn btn-primary">Get Started</button>
        </div>   
      </div>
    </div>
  </div>
  )
}

export default CarouselItem;