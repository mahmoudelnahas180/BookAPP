import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// from font awsome
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../../components/Card";
import { getLastFourBooks } from "../../services/bookServies";
export default function LastBookShow() {
  const [lastFourBooks, setLastFourBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getLastFourBooks();
        setLastFourBooks(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex items-center justify-between mb-7 mt-4">
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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        </div> */}
        <Card books={lastFourBooks} />
      </div>
    </section>
  );
}
