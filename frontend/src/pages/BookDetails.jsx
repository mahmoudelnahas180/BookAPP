import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBookById } from "../services/bookServies";
import { addToCart } from "../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function BookDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const data = await getBookById(id);
        setBook(data.book);
      } catch (err) {
        setError("فشل في جلب تفاصيل الكتاب");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    if (book) {
      dispatch(addToCart(book));
      // You could add a toast notification here
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen mt-[70px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );

  if (error || !book)
    return (
      <div className="container mx-auto px-5 py-20 mt-[70px] text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">خطأ</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          {error || "الكتاب غير موجود"}
        </p>
        <Link
          to="/books"
          className="bg-primary text-white px-6 py-2 rounded-xl"
        >
          العودة للكتب
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[70px]">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-slate-500 mb-8" dir="rtl">
        <Link to="/" className="hover:text-primary transition-colors">
          الرئيسية
        </Link>
        <span className="mx-2">/</span>
        <Link to="/books" className="hover:text-primary transition-colors">
          الكتب
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800 dark:text-slate-200 font-bold">
          {book.title}
        </span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Gallery / Image Side */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 flex items-center justify-center shadow-inner">
          <div className="relative aspect-[2/3] w-full max-w-sm shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
            {book.coverImage ? (
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-6xl text-slate-400"
                />
              </div>
            )}
            {book.isSale && (
              <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {book.discountParcent || "خصم"}%
              </span>
            )}
          </div>
        </div>

        {/* Details Side */}
        <div className="flex flex-col h-full text-right" dir="rtl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-3">
              {book.category?.name || "عام"}
            </span>
            <h1 className="text-3xl md:text-4xl font-black font-serif text-slate-900 dark:text-white mb-2 leading-tight">
              {book.title}
            </h1>
            <Link
              to={`/search?author=${book.author}`}
              className="text-lg text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
            >
              المؤلف: {book.author}
            </Link>
          </div>

          <div className="flex items-end gap-3 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
            <span className="text-4xl font-bold text-primary font-numbers">
              {book.price} <span className="text-lg">ج.م</span>
            </span>
            {book.oldPrice && (
              <span className="text-xl text-slate-400 line-through font-numbers mb-1">
                {book.oldPrice} ج.م
              </span>
            )}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
              عن الكتاب
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {book.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>إضافة للسلة</span>
            </button>
            <button className="flex-none p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-red-500">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="block text-xs text-slate-500 mb-1">الصفحات</span>
              <span className="font-bold text-slate-900 dark:text-white font-numbers">
                320
              </span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <span className="block text-xs text-slate-500 mb-1">اللغة</span>
              <span className="font-bold text-slate-900 dark:text-white">
                العربية
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
