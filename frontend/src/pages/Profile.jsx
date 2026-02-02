import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../services/orderService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[70px]">
      <div className="flex flex-col md:flex-row gap-10">
        {/* User Info Sidebar */}
        <div className="md:w-1/3 lg:w-1/4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 text-center sticky top-24">
            <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-primary mb-4">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {user?.name}
            </h2>
            <p className="text-slate-500 text-sm mb-6">{user?.email}</p>
            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 text-sm text-start space-y-2">
              <p>
                <span className="font-bold">الدور:</span>{" "}
                {user?.role === "admin" ? "مدير" : "مستخدم"}
              </p>
              {/* Add more profile info if available */}
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold font-serif mb-6 text-slate-900 dark:text-white border-b pb-4">
            طلباتي السابقة
          </h2>

          {loading ? (
            <div className="flex justify-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4 border-b border-slate-50 dark:border-slate-700 pb-4">
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">
                        رقم الطلب
                      </span>
                      <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                        #{order._id.slice(-6)}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">
                        التاريخ
                      </span>
                      <span className="font-numbers">
                        {new Date(order.createdAt).toLocaleDateString("ar-EG")}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">
                        الإجمالي
                      </span>
                      <span className="font-bold text-primary font-numbers">
                        {order.totalAmount} ج.م
                      </span>
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold 
                                        ${
                                          order.status === "delivered"
                                            ? "bg-green-100 text-green-700"
                                            : order.status === "cancelled"
                                              ? "bg-red-100 text-red-700"
                                              : "bg-amber-100 text-amber-700"
                                        }`}
                      >
                        {order.status === "pending"
                          ? "قيد الانتظار"
                          : order.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 min-w-[200px] bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg"
                      >
                        <div className="w-10 h-14 bg-slate-200 rounded overflow-hidden shrink-0">
                          {item.book?.coverImage && (
                            <img
                              src={item.book.coverImage}
                              className="w-full h-full object-cover"
                              alt=""
                            />
                          )}
                        </div>
                        <div className="text-sm">
                          <p className="font-bold line-clamp-1">
                            {item.book?.title || "كتاب محذوف"}
                          </p>
                          <p className="text-xs text-slate-500">
                            {item.quantity} x {item.price} ج.م
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-800 rounded-3xl">
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-4xl text-slate-400 mb-2"
              />
              <p className="text-slate-500">لـم تقم بأي طلبات بعد.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
