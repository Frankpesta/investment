import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarouselItem = ({ image, header, subText }) => {
  const handleClick = () => {
    navigate('/auth/login')
  }
  const navigate = useNavigate();
  return (
    <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${image})`, objectFit: 'cover'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="text-neutral-content w-[90%] md:w-3/4">
      <div className='flex flex-col items-start justify-start'>
        <h1 className='text-[2rem] md:text-[3rem] font-bold mb-6 text-left'>{header}</h1>
        <h2 className="mb-5 text-[1.4rem] text-left">{subText}</h2>
        <div className='flex items-center gap-4'>
        <button onClick={handleClick} className="btn btn-primary">Get Started</button>
        </div>   
      </div>
    </div>
  </div>
  )
}

export default CarouselItem;