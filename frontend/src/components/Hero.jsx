import React from "react";
import MultiCarousel from "react-multi-carousel";
const Carousel = MultiCarousel.default || MultiCarousel;
import "react-multi-carousel/lib/styles.css";

/**
 * @component Hero
 * @description مكون واجهة العرض الرئيسية (Carousel/Slider).
 * يعرض صوراً متحركة للكتب أو العروض المميزة.
 */

// 1. تصميم زرار اليمين (Next Arrow Component)
const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={() => onClick()} // مهم جداً لاستدعاء وظيفة التبديل
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-all mr-2"
      aria-label="الشريحة التالية"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};

// 2. تصميم زرار اليسار (Previous Arrow Component)
const CustomLeftArrow = ({ onClick, ...rest }) => {
  return (
    <button
      onClick={() => onClick()} // مهم جداً لاستدعاء وظيفة التبديل
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 transition-all ml-2"
      aria-label="الشريحة السابقة"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
};

// إعدادات التجاوب (Responsive Config)
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Hero() {
  return (
    <div className="py-10 bg-gray-50 relative mt-[90px]">
      {" "}
      {/* ضفت relative هنا عشان الأزرار تتمحور صح */}
      <Carousel
        responsive={responsive}
        infinite={true} // التكرار اللانهائي
        autoPlay={true} // التشغيل التلقائي
        autoPlaySpeed={3000} // سرعة التشغيل
        keyBoardControl={true} // التحكم بالكيبورد
        rtl={true} // دعم اللغة العربية (من اليمين لليسار)
        containerClass="carousel-container pb-4" // ضفت padding تحت عشان الظل مايتقطعش
        itemClass="px-2"
        // 3. ربط الأزرار المخصصة
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {/* Slide 1 */}
        <div className="relative h-[70vh] md:h-[80vh] ">
          <img
            src="../../public/img_1.jpg"
            alt="Book 1"
            className="block h-full w-full object-cover"
          />
        </div>
        {/* Slide 2 */}
        <div className="relative h-[70vh] md:h-[80vh] ">
          <img
            src="../../public/img_2.jpg"
            alt="Book 2"
            className="block h-full w-full object-cover"
          />
        </div>
        {/* Slide 3 */}
        <div className="relative h-[70vh] md:h-[80vh] ">
          <img
            src="../../public/img_3.jpg"
            alt="Book 3"
            className="block h-full w-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
}
