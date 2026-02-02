import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeading,
  faUser,
  faAlignLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function BookBasicInfo({ register, errors }) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-primary rounded-full"></span>
        البيانات الأساسية
      </h3>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            عنوان الكتاب <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <FontAwesomeIcon icon={faHeading} />
            </div>
            <input
              type="text"
              {...register("title", { required: "عنوان الكتاب مطلوب" })}
              className={`w-full bg-slate-50 dark:bg-slate-800 border ${
                errors.title
                  ? "border-red-500"
                  : "border-slate-200 dark:border-slate-700"
              } rounded-lg py-2.5 pr-10 pl-4 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
              placeholder="مثال: قواعد العشق الأربعون"
            />
          </div>
          {errors.title && (
            <span className="text-xs text-red-500 mt-1">
              {errors.title.message}
            </span>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            المؤلف <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              {...register("author", { required: "اسم المؤلف مطلوب" })}
              className={`w-full bg-slate-50 dark:bg-slate-800 border ${
                errors.author
                  ? "border-red-500"
                  : "border-slate-200 dark:border-slate-700"
              } rounded-lg py-2.5 pr-10 pl-4 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
              placeholder="مثال: إليف شفق"
            />
          </div>
          {errors.author && (
            <span className="text-xs text-red-500 mt-1">
              {errors.author.message}
            </span>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            وصف الكتاب <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3 right-0 pr-3 pointer-events-none text-slate-400">
              <FontAwesomeIcon icon={faAlignLeft} />
            </div>
            <textarea
              {...register("description", {
                required: "وصف الكتاب مطلوب",
              })}
              rows="4"
              className={`w-full bg-slate-50 dark:bg-slate-800 border ${
                errors.description
                  ? "border-red-500"
                  : "border-slate-200 dark:border-slate-700"
              } rounded-lg py-2.5 pr-10 pl-4 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none`}
              placeholder="نبذة مختصرة عن الكتاب..."
            ></textarea>
          </div>
          {errors.description && (
            <span className="text-xs text-red-500 mt-1">
              {errors.description.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
