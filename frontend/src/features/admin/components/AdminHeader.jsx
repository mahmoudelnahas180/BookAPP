import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faMagnifyingGlass,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminHeader({ onMenuClick }) {
  return (
    <header className="h-20 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md sticky top-0 z-10 px-4 md:px-8 flex items-center justify-between border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Breadcrumbs / Page Title */}
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            نظرة عامة
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>الرئيسية</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-[10px] rtl:rotate-180"
            />
            <span className="text-primary">لوحة التحكم</span>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <input
            className="w-64 lg:w-80 h-10 pr-10 pl-4 rounded-full bg-slate-100 dark:bg-slate-800 border-none text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 transition-all focus:outline-none"
            placeholder="بحث في النظام..."
            type="text"
          />
          <div className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 text-[20px]">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
          <FontAwesomeIcon icon={faBell} />
          <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border border-white dark:border-surface-dark"></span>
        </button>
      </div>
    </header>
  );
}
