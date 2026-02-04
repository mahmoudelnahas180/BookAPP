import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// from font awsome
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-white mb-2 relative inline-block">
              وصل حديثاً
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 font-display">
              أحدث الإضافات إلى مكتبتنا هذا الأسبوع
            </p>
          </div>
          <Link
            to="/books"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark font-bold font-display transition-colors group"
          >
            <span>عرض كل الكتب</span>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-[20px] group-hover:-translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <Card books={lastFourBooks} />

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold font-display transition-colors"
          >
            <span>عرض كل الكتب</span>
            <FontAwesomeIcon icon={faArrowLeft} className="text-[20px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
