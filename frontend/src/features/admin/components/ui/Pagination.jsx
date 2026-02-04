import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({
  page,
  limit,
  pages,
  totalItems,
  onPageChange,
  itemsName = "عناصر", // e.g. "كتب", "مستخدمين"
}) {
  const startRange = (page - 1) * limit + 1;
  const endRange = Math.min(page * limit, totalItems);

  return (
    <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-slate-500 dark:text-slate-400 font-display">
        عرض {startRange}-{endRange} من أصل {totalItems} {itemsName}
      </span>
      <div className="flex items-center gap-2" dir="ltr">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 text-slate-400 hover:text-slate-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-[20px]" />
        </button>
        {(() => {
          let visiblePages = [];

          if (pages <= 7) {
            // If total pages are 7 or less, show all numbers
            visiblePages = Array.from({ length: pages || 0 }, (_, i) => i + 1);
          } else {
            // Complex case: show first, last, and window around current
            if (page <= 3) {
              // Start: 1 2 3 4 ... Last
              visiblePages = [1, 2, 3, 4, -1, pages];
            } else if (page >= pages - 2) {
              // End: 1 ... 7 8 9 10
              visiblePages = [1, -1, pages - 3, pages - 2, pages - 1, pages];
            } else {
              // Middle: 1 ... 4 5 6 ... 10
              visiblePages = [1, -1, page - 1, page, page + 1, -1, pages];
            }
          }

          return visiblePages.map((pageNum, index) => {
            if (pageNum === -1) {
              return (
                <span key={`ellipsis-${index}`} className="text-slate-400 px-1">
                  ...
                </span>
              );
            }

            const isActive = pageNum === page;
            return (
              <button
                key={pageNum}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-primary/30"
                    : "text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm"
                }`}
                onClick={() => onPageChange(pageNum)}
              >
                {pageNum}
              </button>
            );
          });
        })()}

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === pages}
          className="p-2 rounded-lg hover:bg-white dark:hover:bg-slate-700 border border-transparent hover:border-slate-200 dark:hover:border-slate-600 text-slate-400 hover:text-slate-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}
