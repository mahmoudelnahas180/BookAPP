import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";

export default function BookVisibility({ register, errors, isSale }) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
        خيارات العرض
      </h3>

      {/* isFeatured Switch */}
      <label className="flex items-center justify-between cursor-pointer group">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          كتاب مميز
        </span>
        <div className="relative inline-block w-11 h-6 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            {...register("isFeatured")}
            className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer peer checked:right-0 right-5 checked:border-primary transition-all duration-300 ease-in-out"
            style={{ top: "2px", right: "2px" }}
          />
          <div className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 dark:bg-slate-700 peer-checked:bg-primary transition-all duration-300"></div>
        </div>
      </label>

      {/* isSale Switch */}
      <label className="flex items-center justify-between cursor-pointer group">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          عرض خصم
        </span>
        <div className="relative inline-block w-11 h-6 align-middle select-none">
          <input
            type="checkbox"
            {...register("isSale")}
            className="peer sr-only"
          />
          <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
        </div>
      </label>

      {/* Sale Percentage - Conditional */}
      {isSale && (
        <div className="pt-2 animate-fadeIn">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            نسبة الخصم (%)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <FontAwesomeIcon icon={faPercentage} />
            </div>
            <input
              type="number"
              {...register("discountParcent", {
                required: isSale ? "نسبة الخصم مطلوبة" : false,
                min: 1,
                max: 100,
              })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pr-10 pl-4 text-slate-800 dark:text-slate-200 font-numbers focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              placeholder="e.g. 20"
            />
          </div>
          {errors.discountParcent && (
            <span className="text-xs text-red-500 mt-1">
              {errors.discountParcent.message}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
