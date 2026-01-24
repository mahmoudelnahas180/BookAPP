import React from "react";
import { Link } from "react-router-dom";
// from font awsome
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card";
export default function LastBookShow() {
  // create array of objects 5
  // create a card for each object
  // use map to render the cards
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
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex items-center justify-between mb-4 mt-4">
          <div>
            <h5 className="text-2xl font-bold mb-2">وصل حديثاً</h5>
            <p className="text-gray-500 text-sm">
              أحدث الإضافات إلى مكتبتنا هذا الأسبوع
            </p>
          </div>
          <div>
            <Link className="text-white p-2 hover:bg-primary-hover rounded-full circle bg-primary ml-2">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <Link className="text-white p-2 hover:bg-primary-hover rounded-full circle bg-primary">
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*   والباقي يظهر لما اضغط علي تصفحه   الكل  */}
        </div>
      </div>
      <Card />
    </section>
  );
}
