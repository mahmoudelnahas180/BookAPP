import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faBoxes } from "@fortawesome/free-solid-svg-icons";

export default function BookPricing({ register, errors }) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-secondary rounded-full"></span>
        السعر والمخزون
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            السعر (ر.س) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
            <input
              type="number"
              step="0.01"
              {...register("price", {
                required: "السعر مطلوب",
                min: 0,
              })}
              className={`w-full bg-slate-50 dark:bg-slate-800 border ${
                errors.price
                  ? "border-red-500"
                  : "border-slate-200 dark:border-slate-700"
              } rounded-lg py-2.5 pr-10 pl-4 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-numbers`}
              placeholder="0.00"
            />
          </div>
          {errors.price && (
            <span className="text-xs text-red-500 mt-1">
              {errors.price.message}
            </span>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            الكمية في المخزون <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <FontAwesomeIcon icon={faBoxes} />
            </div>
            <input
              type="number"
              {...register("stock", {
                required: "الكمية مطلوبة",
                min: 0,
              })}
              className={`w-full bg-slate-50 dark:bg-slate-800 border ${
                errors.stock
                  ? "border-red-500"
                  : "border-slate-200 dark:border-slate-700"
              } rounded-lg py-2.5 pr-10 pl-4 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-numbers`}
              placeholder="0"
            />
          </div>
          {errors.stock && (
            <span className="text-xs text-red-500 mt-1">
              {errors.stock.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
