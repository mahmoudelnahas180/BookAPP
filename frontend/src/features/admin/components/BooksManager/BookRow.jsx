import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function BookRow({ book, onEdit, onDelete, onStatusUpdate }) {
  return (
    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-4 py-2">
        <div
          className="w-10 h-14 rounded shadow-sm bg-slate-200 bg-cover bg-center overflow-hidden relative group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${book.coverImage || book.image || ""})`,
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-serif leading-tight">
            {book.title}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-display mt-1">
            {book.author}
          </span>
          {/* Status Badge */}
          <span
            className={`inline-flex w-fit mt-1 items-center px-2 py-0.5 rounded-full text-[10px] font-bold 
              ${
                book.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : book.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-amber-100 text-amber-700"
              }`}
          >
            {book.status === "approved"
              ? "مقبول"
              : book.status === "rejected"
                ? "مرفوض"
                : "قيد المراجعة"}
          </span>
        </div>
      </td>
      <td className="px-4 py-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
          {book.category?.title || book.category?.name || "غير مصنف"}
        </span>
      </td>
      <td className="px-4 py-2">
        <span className="font-display font-medium text-sm text-slate-700 dark:text-slate-300">
          {book.stock}
        </span>
      </td>
      <td className="px-4 py-2">
        <span className="font-display font-bold text-sm text-primary">
          {book.price} ر.س
        </span>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center justify-end gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
          {book.status === "pending" && onStatusUpdate && (
            <>
              <button
                className="p-1 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
                title="قبول"
                onClick={() => onStatusUpdate(book._id, "approved")}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="text-[18px]" />
              </button>
              <button
                className="p-1 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                title="رفض"
                onClick={() => onStatusUpdate(book._id, "rejected")}
              >
                <FontAwesomeIcon icon={faTimesCircle} className="text-[18px]" />
              </button>
            </>
          )}

          <button
            className="p-1 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors"
            title="تعديل"
            onClick={() => onEdit(book)}
          >
            <FontAwesomeIcon icon={faEdit} className="text-[18px]" />
          </button>
          <button
            className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            title="حذف"
            onClick={() => onDelete(book._id)}
          >
            <FontAwesomeIcon icon={faTrash} className="text-[18px]" />
          </button>
        </div>
      </td>
    </tr>
  );
}
