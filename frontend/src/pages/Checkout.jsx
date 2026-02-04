import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice"; // Assuming this action exists
import { createOrder } from "../services/orderService"; // Assuming this service exists
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Checkout() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0 && !success) {
      navigate("/cart");
    }
  }, [cartItems, navigate, success]);

  const handlePlaceOrder = async () => {
    setLoading(true);
    try {
      // Prepare order data (simplified for now)
      const orderData = {
        items: cartItems.map((item) => ({
          book: item._id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalAmount,
        shippingAddress: "123 Test St, Cairo", // Placeholder
        paymentMethod: "cod", // Cash on Delivery
      };

      // await createOrder(orderData); // We would call the API here
      // For simulation purposes:
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSuccess(true);
      dispatch(clearCart());

      // Navigate to profile after 3 seconds
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch (error) {
      console.error("Order failed:", error);
      alert("حدث خطأ أثناء إتمام الطلب");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="container mx-auto px-5 py-20 mt-[70px] text-center min-h-[60vh] flex flex-col items-center justify-center">
        <div className="bg-green-100 p-6 rounded-full text-green-600 mb-6 animate-bounce">
          <FontAwesomeIcon icon={faCheckCircle} className="text-6xl" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          تم استلام طلبك بنجاح!
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          شكراً لتسوقك معنا. سيتم تحويلك إلى صفحة طلباتي...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[70px]">
      <h1 className="text-3xl font-bold font-serif text-slate-900 dark:text-white mb-8">
        إتمام الطلب
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <div className="flex-1 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-xl font-bold mb-6 border-b pb-4 dark:border-slate-700 text-slate-800 dark:text-white">
            عنوان الشحن
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  الاسم الأول
                </label>
                <input
                  type="text"
                  defaultValue={user?.name?.split(" ")[0]}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  اسم العائلة
                </label>
                <input
                  type="text"
                  defaultValue={user?.name?.split(" ")[1] || ""}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                العنوان
              </label>
              <input
                type="text"
                placeholder="اسم الشارع، رقم المبنى..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  المدينة
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-white"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24">
            <h2 className="text-xl font-bold mb-6 border-b pb-4 dark:border-slate-700 text-slate-800 dark:text-white">
              ملخص الطلب
            </h2>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-start text-sm"
                >
                  <span className="text-slate-600 dark:text-slate-300">
                    {item.title}{" "}
                    <span className="text-xs text-slate-400">
                      x{item.quantity}
                    </span>
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white font-numbers">
                    {item.price * item.quantity} ج.م
                  </span>
                </div>
              ))}
              <div className="border-t border-dashed border-slate-200 dark:border-slate-600 my-4"></div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-slate-900 dark:text-white">الإجمالي</span>
                <span className="text-primary font-numbers">
                  {totalAmount} ج.م
                </span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {loading ? (
                <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "تأكيد الطلب"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
