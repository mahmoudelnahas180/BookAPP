import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCartPlus,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ books }) {
  if (!books || books.length === 0) return null;
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
    // Optional: Add toast/alert here
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {books.map((book) => (
        <div
          key={book._id}
          className="group w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-card hover:border-primary/20 flex flex-col overflow-hidden"
        >
          {/* Image Container */}
          <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
            {book.coverImage ? (
              <img
                src={book.coverImage}
                alt={book.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => (e.target.style.display = "none")}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-300">
                <FontAwesomeIcon icon={faBook} className="text-6xl" />
              </div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Discount Badge */}
            {book.isSale && book.discountParcent && (
              <span className="absolute top-3 right-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md animate-pulse">
                {book.discountParcent}% خصم
              </span>
            )}

            {/* Quick Action Buttons */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 px-4">
              <button
                onClick={() => handleAddToCart(book)}
                title="إضافة للسلة"
                className="h-10 w-10 rounded-full bg-white text-primary shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faCartPlus} className="text-[20px]" />
              </button>
              <Link
                to={`/books/${book._id}`}
                title="عرض التفاصيل"
                className="h-10 w-10 rounded-full bg-white text-slate-700 shadow-lg flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faEye} className="text-[20px]" />
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1 text-start" dir="rtl">
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1 mb-1">
              <Link to={`/books/${book._id}`}>{book.title}</Link>
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mb-3">
              {book.author}
            </p>

            <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary font-numbers">
                  {book.price} <span className="text-xs">ج.م</span>
                </span>
                {book.oldPrice && (
                  <span className="text-sm text-slate-400 line-through font-numbers">
                    {book.oldPrice}
                  </span>
                )}
              </div>
              <div className="flex text-yellow-400 text-xs">
                {/* Static stars for now, ideally dynamic */}
                <FontAwesomeIcon icon={faStar} className="text-[16px]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
