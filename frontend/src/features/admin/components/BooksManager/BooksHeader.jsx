import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function BooksHeader() {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">
          إدارة الكتب
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-display text-sm">
          عرض وإدارة مخزون المكتبة الرقمي
        </p>
      </div>
      <Link
        to="add"
        className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-200 flex items-center gap-2 font-bold font-display group shrink-0 text-sm"
      >
        <FontAwesomeIcon
          icon={faPlus}
          className="group-hover:rotate-90 transition-transform duration-300 text-[20px]"
        />
        <span>أضف كتاباً جديداً</span>
      </Link>
    </header>
  );
}
