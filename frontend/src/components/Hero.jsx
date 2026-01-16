import React from 'react';
import MultiCarousel from 'react-multi-carousel';
const Carousel = MultiCarousel.default || MultiCarousel;
import 'react-multi-carousel/lib/styles.css'

// 1. تصميم زرار اليمين (Next)
const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={() => onClick()} // مهم جداً عشان الزرار يشتغل
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-all mr-2"
      aria-label="الشريحة التالية"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
};

// 2. تصميم زرار اليسار (Previous)
const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={() => onClick()} // مهم جداً عشان الزرار يشتغل
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-all ml-2"
      aria-label="الشريحة السابقة"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Hero() {
  return (
    <div className="py-10 bg-gray-50 relative mt-[90px]"> {/* ضفت relative هنا عشان الأزرار تتمحور صح */}

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        rtl={true}
        containerClass="carousel-container pb-4" // ضفت padding تحت عشان الظل مايتقطعش
        itemClass="px-2"

        // 3. هنا بنربط الأزرار الجديدة
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        <div className='relative h-[70vh] md:h-[80vh] '>
          <img src="../../public/img_1.jpg" alt="dd" className='block h-full w-full object-cover' />

        </div>
        <div className='relative h-[70vh] md:h-[80vh] '>
          <img src="../../public/img_2.jpg" alt="dd" className='block h-full w-full object-cover' />

        </div>
        <div className='relative h-[70vh] md:h-[80vh] '>
          <img src="../../public/img_3.jpg" alt="dd" className='block h-full w-full object-cover' />

        </div>


      </Carousel>

    </div>
  )
}