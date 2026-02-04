import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";

export default function BookMedia({ register }) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
        صورة الغلاف
      </h3>

      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors mb-3">
          <FontAwesomeIcon icon={faCloudUpload} className="text-xl" />
        </div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          اضغط لرفع صورة
        </p>
        <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 5MB</p>
        <input type="hidden" {...register("coverImage")} />
      </div>
    </div>
  );
}
