import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTriangleExclamation,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

export default function BooksStats({ numberOfBook }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
            إجمالي الكتب
          </p>
          <p className="text-xl font-bold text-slate-900 dark:text-white font-display">
            {numberOfBook}
          </p>
        </div>
        <div className="bg-primary/10 p-2 rounded-lg text-primary">
          <FontAwesomeIcon icon={faBook} className="text-[20px]" />
        </div>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
            مخزون منخفض
          </p>
          <p className="text-xl font-bold text-secondary font-display">12</p>
        </div>
        <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-[20px]"
          />
        </div>
      </div>
      <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
            القيمة الإجمالية
          </p>
          <p className="text-xl font-bold text-slate-900 dark:text-white font-display">
            84,320 ر.س
          </p>
        </div>
        <div className="bg-green-500/10 p-2 rounded-lg text-green-600">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-[20px]" />
        </div>
      </div>
    </div>
  );
}
