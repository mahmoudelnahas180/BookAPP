import React from 'react';
import MultiCarousel from 'react-multi-carousel';
const Carousel = MultiCarousel.default || MultiCarousel;
import 'react-multi-carousel/lib/styles.css'
const responsive = {
  superLargeDesktop: {
    // شاشات كبيرة جداً
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    // لابتوب وديسك توب
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    // تابلت
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    // موبايل
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function Hero() {
  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Featured Books</h2>
      <Carousel
        responsive={responsive}
        infinite={true} // يلف لما يخلص
        autoPlay={true} // يقلب لوحده
        autoPlaySpeed={3000} // كل 3 ثواني
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="px-2" // مسافة بين كل عنصر والتاني
      >
        {/* هنا بتحط العناصر بتاعتك، ممكن تعمل map على array كتب */}

        {/* Card 1 Example */}
        <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">Book Title 1</h3>
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Card 2 Example */}
        <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">Book Title 2</h3>
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Card 3 Example */}
        <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">Book Title 3</h3>
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Card 4 Example */}
        <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">Book Title 4</h3>
          <p className="text-gray-500">Author Name</p>
        </div>

        {/* Card 5 Example */}
        <div className="bg-white rounded-lg shadow-md p-4 h-64 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">Book Title 5</h3>
          <p className="text-gray-500">Author Name</p>
        </div>

      </Carousel>

    </div>
  )
}
