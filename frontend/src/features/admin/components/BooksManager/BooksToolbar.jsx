import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFilter,
  faSort,
} from "@fortawesome/free-solid-svg-icons";

export default function BooksToolbar({ searchQuery, onSearchChange }) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-2 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm mb-4 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-0 z-10 backdrop-blur-xl bg-opacity-95 dark:bg-opacity-95">
      {/* Search */}
      <div className="relative w-full md:w-96 group">
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-[20px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-2 pr-9 pl-4 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 text-xs transition-all font-display"
          placeholder="بحث عن طريق العنوان أو الرقم التسلسلي..."
          type="text"
        />
      </div>
      {/* Filters */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        <button className="flex-1 md:flex-none flex items-center justify-center gap-1 px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <FontAwesomeIcon icon={faFilter} className="text-[18px]" />
          <span>تصفية</span>
        </button>
        <button className="flex-1 md:flex-none flex items-center justify-center gap-1 px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          <FontAwesomeIcon icon={faSort} className="text-[18px]" />
          <span>ترتيب</span>
        </button>
      </div>
    </div>
  );
}
