import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faMinus,
  faFilter,
  faDownload,
  faEye,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminDashboard() {
  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat Card 1: Sales */}
        <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-soft border border-slate-100 dark:border-slate-700/50 relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-primary/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                إجمالي المبيعات
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-numbers tracking-tight">
                ₪125,000
              </h3>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md text-xs font-bold font-numbers">
              <FontAwesomeIcon icon={faArrowTrendUp} className="text-sm" />
              <span>+12%</span>
            </div>
          </div>
          {/* Chart Area */}
          <div className="h-16 w-full relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-full h-full stroke-primary fill-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 40"
            >
              <path
                d="M0 30 C 10 30, 15 10, 25 10 C 35 10, 40 35, 50 35 C 60 35, 65 5, 75 5 C 85 5, 90 20, 100 15"
                strokeLinecap="round"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              ></path>
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  x2="0%"
                  y1="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{
                      stopColor: "var(--color-primary)",
                      stopOpacity: 0.2,
                    }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{
                      stopColor: "var(--color-primary)",
                      stopOpacity: 0,
                    }}
                  ></stop>
                </linearGradient>
              </defs>
              <path
                className="hidden dark:block"
                d="M0 30 C 10 30, 15 10, 25 10 C 35 10, 40 35, 50 35 C 60 35, 65 5, 75 5 C 85 5, 90 20, 100 15 V 40 H 0 Z"
                fill="url(#gradient1)"
                stroke="none"
              ></path>
            </svg>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-left" dir="ltr">
            vs last month
          </p>
        </div>

        {/* Stat Card 2: Active Users */}
        <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-soft border border-slate-100 dark:border-slate-700/50 relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                المستخدمون النشطون
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-numbers tracking-tight">
                1,240
              </h3>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md text-xs font-bold font-numbers">
              <FontAwesomeIcon icon={faArrowTrendUp} className="text-sm" />
              <span>+5%</span>
            </div>
          </div>
          {/* Chart Area */}
          <div className="h-16 w-full relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-full h-full stroke-blue-500 fill-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 40"
            >
              <path
                d="M0 35 C 20 35, 25 25, 35 25 C 45 25, 50 15, 60 15 C 70 15, 80 10, 100 5"
                strokeLinecap="round"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-left" dir="ltr">
            vs last month
          </p>
        </div>

        {/* Stat Card 3: Total Books */}
        <div className="group bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-soft border border-slate-100 dark:border-slate-700/50 relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                إجمالي الكتب
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-numbers tracking-tight">
                850
              </h3>
            </div>
            <div className="flex items-center gap-1 text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-xs font-bold font-numbers">
              <FontAwesomeIcon icon={faMinus} className="text-sm" />
              <span>0%</span>
            </div>
          </div>
          {/* Chart Area */}
          <div className="h-16 w-full relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
            <svg
              className="w-full h-full stroke-purple-500 fill-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 40"
            >
              <path
                d="M0 20 H 20 C 30 20, 35 25, 45 25 C 55 25, 60 15, 70 15 H 100"
                strokeLinecap="round"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-left" dir="ltr">
            vs last month
          </p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft border border-slate-100 dark:border-slate-700/50 overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            أحدث الطلبات
          </h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faFilter} className="text-lg" />
              <span>تصفية</span>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-sm shadow-primary/30 flex items-center gap-2">
              <FontAwesomeIcon icon={faDownload} className="text-lg" />
              <span>تصدير</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase font-bold text-xs">
              <tr>
                <th className="px-6 py-4 font-bold tracking-wider">
                  رقم الطلب
                </th>
                <th className="px-6 py-4 font-bold tracking-wider">الكتاب</th>
                <th className="px-6 py-4 font-bold tracking-wider">العميل</th>
                <th className="px-6 py-4 font-bold tracking-wider">التاريخ</th>
                <th className="px-6 py-4 font-bold tracking-wider">المبلغ</th>
                <th className="px-6 py-4 font-bold tracking-wider">الحالة</th>
                <th className="px-6 py-4 font-bold tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {/* Note: In a real app, mapping would happen here */}
              {/* Order 1 */}
              <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4 font-numbers font-medium text-slate-600 dark:text-slate-300">
                  #ORD-3452
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded bg-slate-200 bg-cover bg-center shrink-0"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWYkLXPefL5FL8H5SH7kpUVm6TTSJ8fEQxuditzXXkzfYQdUHMqboYYzVm-d9IDcJ_wqSkgPJO3JsDSwn5pQ4I5VsJNi8gc_Q1VL4jcPyr2uzy6cFGAl_RYZYGdXkQmHrx3oMsa-GNqIDm001mq4Jv_whbbWF_kKvelGHVpymrKEtQWwpkc64l7Fe4xhsujBcNiSh5NSLNFdCIoOv6zFOwVm51VNXvi1krj2HZZD4rTlnDUVAtvyShfF2FqP38EPW3F3couf8KEoMO')",
                      }}
                    ></div>
                    <span className="font-medium text-slate-800 dark:text-slate-200 line-clamp-1 max-w-[150px]">
                      فن التفكير الواضح
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="size-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
                      م
                    </div>
                    <span className="text-slate-600 dark:text-slate-300">
                      محمد علي
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500 font-numbers text-xs">
                  2023-10-24
                </td>
                <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-200 font-numbers">
                  ₪120.00
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    <span className="size-1.5 rounded-full bg-green-500"></span>
                    مكتمل
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md text-slate-400 hover:text-primary transition-colors">
                    <FontAwesomeIcon icon={faEye} className="text-[20px]" />
                  </button>
                </td>
              </tr>
              {/* Order 2 and others would follow similarly */}
            </tbody>
          </table>
        </div>

        {/* Pagination - Simplified from HTML */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
          <span className="text-sm text-slate-500">عرض 1-5 من 42 طلب</span>
          <div className="flex items-center gap-2">
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-sm rtl:rotate-180"
              />
            </button>
            <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-numbers shadow-sm">
              1
            </button>
            <button className="size-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-sm rtl:rotate-180"
              />
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-slate-400 py-4">
        © 2023 منصة مكتبتي. جميع الحقوق محفوظة.
      </footer>
    </>
  );
}
