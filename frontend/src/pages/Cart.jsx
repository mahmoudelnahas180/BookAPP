import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  clearCart,
} from "../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faArrowRight,
  faMinus,
  faPlus,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-5 lg:px-20 py-20 mt-[80px] text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-full">
            <FontAwesomeIcon
              icon={faCartArrowDown}
              className="text-6xl text-slate-400"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          عربة التسوق فارغة
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          لم تقم بإضافة أي كتب إلى العربة بعد.
        </p>
        <Link
          to="/books"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary/30"
        >
          <span>تصفح الكتب</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[90px] relative">
      <h1 className="text-3xl font-bold font-serif mb-8 text-slate-900 dark:text-white">
        عربة التسوق
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm"
            >
              {/* Image */}
              <div className="size-24 shrink-0 bg-slate-100 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 dark:text-white truncate">
                  {item.title}
                </h3>
                <p className="text-primary font-bold mt-1">{item.price} ج.م</p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => dispatch(decreaseQuantity(item._id))}
                  className="size-8 flex items-center justify-center bg-white dark:bg-slate-600 rounded-md shadow-sm text-slate-600 dark:text-slate-200 hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faMinus} className="text-sm" />
                </button>
                <span className="font-bold w-4 text-center text-slate-900 dark:text-white font-numbers">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="size-8 flex items-center justify-center bg-white dark:bg-slate-600 rounded-md shadow-sm text-slate-600 dark:text-slate-200 hover:bg-green-50 hover:text-green-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faPlus} className="text-sm" />
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}

          <button
            onClick={() => dispatch(clearCart())}
            className="text-red-500 hover:underline text-sm font-bold flex items-center gap-1 mt-4"
          >
            <FontAwesomeIcon icon={faTrashCan} className="text-sm" />
            تفريغ السلة
          </button>
        </div>

        {/* Summary Card */}
        <div className="lg:w-96 shrink-0">
          <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 shadow-card sticky top-28">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              ملخص الطلب
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-slate-500">
                <span>المجموع الفرعي</span>
                <span className="font-numbers">{totalAmount} ج.م</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>الشحن</span>
                <span className="text-green-500 font-bold">مجاني</span>
              </div>
              <div className="border-t border-slate-100 dark:border-slate-700 pt-3 flex justify-between font-bold text-lg text-slate-900 dark:text-white">
                <span>الإجمالي</span>
                <span className="font-numbers">{totalAmount} ج.م</span>
              </div>
            </div>

            <button
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-1"
              onClick={handleCheckoutClick}
            >
              متابعة الشراء
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              عملية دفع آمنة ومشفرة 100%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
