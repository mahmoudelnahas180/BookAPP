import React from "react";
import { Link } from "react-router-dom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ books }) {
  return (
    <div className="flex flex-wrap lg:gap-6 gap-6 justify-center w-full ">
      {books.map((book) => (
        <div
          key={book._id}
          className="group w-full  max-w-[260px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Image */}
          <div className="relative aspect-[2/3] h-[300px] w-full overflow-hidden bg-gray-200 p-5">
            <img
              src={book.image}
              alt={book.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Discount Badge */}
            {book.discount && (
              <span className="absolute top-5 right-5 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white shadow">
                {book.discount}%-
              </span>
            )}

            {/* Add to cart */}
            <button className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-14 items-center justify-center rounded-full bg-white text-primary shadow-md transition-all duration-300 hover:bg-primary hover:text-white group-hover:translate-y-0">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 text-right">
            <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-primary line-clamp-1">
              {book.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500 line-clamp-1">
              {book.author}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500">{book.rating} </span>
                {/* <span className="text-sm text-gray-500">{book.reviews}</span> */}
              </div>
              {/* Price */}

              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  {book.price} ج.م
                </span>

                {book.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {book.oldPrice} ج.م
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
