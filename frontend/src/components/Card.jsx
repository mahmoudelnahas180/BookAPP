import React from "react";
import { Link } from "react-router-dom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card() {
  const books = [
    {
      id: 1,
      name: "Book 1",
      price: 10,
      image: "https://via.placeholder.com/150",
      rating: 4,
      reviews: 10,
      category: "Category 1",
      author: "Author 1",
      publisher: "Publisher 1",
      pages: 100,
      language: "English",
      isbn: "1234567890",
      stock: 10,
      discount: 10,
      discountPrice: 9,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      __v: 0,
    },
    {
      id: 2,
      name: "Book 2",
      price: 20,
      image: "https://via.placeholder.com/150",
      rating: 4,
      reviews: 10,
      category: "Category 2",
      author: "Author 2",
      publisher: "Publisher 2",
      pages: 100,
      language: "English",
      isbn: "1234567890",
      stock: 10,
      discount: 10,
      discountPrice: 9,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      __v: 0,
    },
    {
      id: 3,
      name: "Book 3",
      price: 30,
      image: "https://via.placeholder.com/150",
      rating: 4,
      reviews: 10,
      category: "Category 3",
      author: "Author 3",
      publisher: "Publisher 3",
      pages: 100,
      language: "English",
      isbn: "1234567890",
      stock: 10,
      discount: 10,
      discountPrice: 9,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      __v: 0,
    },
    {
      id: 4,
      name: "Book 4",
      price: 40,
      image: "https://via.placeholder.com/150",
      rating: 4,
      reviews: 10,
      category: "Category 4",
      author: "Author 4",
      publisher: "Publisher 4",
      pages: 100,
      language: "English",
      isbn: "1234567890",
      stock: 10,
      discount: 10,
      discountPrice: 9,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      __v: 0,
    },
    {
      id: 5,
      name: "Book 5",
      price: 50,
      image: "https://via.placeholder.com/150",
      rating: 4,
      reviews: 10,
      category: "Category 5",
      author: "Author 5",
      publisher: "Publisher 5",
      pages: 100,
      language: "English",
      isbn: "1234567890",
      stock: 10,
      discount: 10,
      discountPrice: 9,
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      __v: 0,
    },
  ];
  const book1 = {
    id: 1,
    name: "Book 1",
    price: 10,
    image:
      "data:image/jpeg;base64,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",
    rating: 4,
    reviews: 10,
    category: "Category 1",
    author: "Author 1",
    publisher: "Publisher 1",
    pages: 100,
    language: "English",
    isbn: "1234567890",
    stock: 10,
    discount: 10,
    discountPrice: 9,
    createdAt: "2022-01-01",
    updatedAt: "2022-01-01",
    __v: 0,
  };
  return (
    <div className="group w-full max-w-[260px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-200 p-5">
        <img
          src={book1.image}
          alt={book1.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {book1.discount && (
          <span className="absolute top-5 right-5 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white shadow">
            {book1.discount}%-
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
          {book1.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500 line-clamp-1">
          {book1.author}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">{book1.rating} </span>
            {/* <span className="text-sm text-gray-500">{book1.reviews}</span> */}
          </div>
          {/* Price */}

          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {book1.price} ج.م
            </span>

            {book1.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                {book1.oldPrice} ج.م
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
