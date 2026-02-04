import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function BookCategory({
  register,
  errors,
  categories,
  loadingCategories,
}) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
        التصنيف
      </h3>

      <div className="relative">
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
          <FontAwesomeIcon icon={faList} />
        </div>
        <select
          {...register("category", { required: "اختر تصنيفاً" })}
          disabled={loadingCategories}
          className={`w-full bg-slate-50 dark:bg-slate-800 border ${
            errors.category
              ? "border-red-500"
              : "border-slate-200 dark:border-slate-700"
          } rounded-lg py-2.5 pr-10 pl-4 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer disabled:opacity-50`}
        >
          <option value="">
            {loadingCategories ? "جاري التحميل..." : "اختر التصنيف..."}
          </option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      {errors.category && (
        <span className="text-xs text-red-500 mt-1">
          {errors.category.message}
        </span>
      )}
    </div>
  );
}
