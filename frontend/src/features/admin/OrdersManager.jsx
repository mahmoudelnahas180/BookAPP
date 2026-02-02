import React, { useEffect, useState } from "react";
import { getAllOrders, updateOrderStatus } from "../../services/orderService";
import Pagination from "./components/ui/Pagination";

export default function OrdersManager() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [totalOrders, setTotalOrders] = useState(0);

  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    shipped: "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  const statusTranslations = {
    pending: "قيد الانتظار",
    processing: "جاري التجهيز",
    shipped: "تم الشحن",
    delivered: "تم التسليم",
    cancelled: "ملغي",
  };

  useEffect(() => {
    fetchOrders(page);
  }, [page]);

  const fetchOrders = async (pageNum = 1) => {
    try {
      setLoading(true);
      const data = await getAllOrders(pageNum, 10);
      setOrders(data.orders || []);
      setPages(data.pages || 1);
      setTotalOrders(data.totalOrders || 0);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    if (window.confirm("هل أنت متأكد من تغيير حالة الطلب؟")) {
      try {
        await updateOrderStatus(orderId, newStatus);
        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order,
          ),
        );
      } catch (error) {
        console.error("Error updating status:", error);
        alert("فشل تحديث الحالة");
      }
    }
  };

  return (
    <>
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">
            إدارة الطلبات
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-display text-sm">
            عرض وتحديث حالات طلبات العملاء
          </p>
        </div>
      </header>

      {/* Stats Cards - Simplified */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
              إجمالي الطلبات
            </p>
            <p className="text-xl font-bold text-slate-900 dark:text-white font-display">
              {totalOrders}
            </p>
          </div>
          <div className="bg-blue-500/10 p-2 rounded-lg text-blue-600">
            <span className="material-symbols-outlined text-[20px]">
              shopping_cart
            </span>
          </div>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  رقم الطلب
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  العميل
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  إجمالي المبلغ
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  المنتجات
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  الحالة
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  التاريخ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {loading ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-8 text-center text-slate-500 text-sm"
                  >
                    جاري التحميل...
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-8 text-center text-slate-500 text-sm"
                  >
                    لا يوجد طلبات.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-4 py-2 text-sm font-mono text-slate-600 dark:text-slate-300">
                      #{order._id.slice(-6).toUpperCase()}
                    </td>
                    <td className="px-4 py-2 text-sm text-slate-900 dark:text-slate-100 font-medium">
                      {order.user?.name || "مستخدم محذوف"}
                    </td>
                    <td className="px-4 py-2 text-sm font-bold text-slate-900 dark:text-slate-100">
                      {order.totalAmount} ر.س
                    </td>
                    <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">
                      {order.items.length} عنصر
                    </td>
                    <td className="px-4 py-2">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                        className={`text-[10px] font-bold px-2 py-1 rounded-full outline-none cursor-pointer border-none appearance-none ${statusColors[order.status]}`}
                      >
                        {Object.entries(statusTranslations).map(
                          ([key, label]) => (
                            <option
                              key={key}
                              value={key}
                              className="bg-white text-slate-800"
                            >
                              {label}
                            </option>
                          ),
                        )}
                      </select>
                    </td>
                    <td className="px-4 py-2 text-sm text-slate-500 dark:text-slate-400 font-display">
                      {new Date(order.createdAt).toLocaleDateString("ar-EG")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          page={page}
          limit={10}
          pages={pages}
          totalItems={totalOrders}
          onPageChange={setPage}
          itemsName="طلب"
        />
      </div>
    </>
  );
}
