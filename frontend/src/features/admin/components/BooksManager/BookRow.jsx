import React from "react";

export default function BookRow({ book, onEdit, onDelete }) {
  return (
    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
      <td className="px-4 py-2">
        <div
          className="w-10 h-14 rounded shadow-sm bg-slate-200 bg-cover bg-center overflow-hidden relative group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${book.image || ""})`,
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
        </div>
      </td>
      <td className="px-4 py-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
          {book.category?.name || "غير مصنف"}
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
          <button
            className="p-1 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors"
            title="تعديل"
            onClick={() => onEdit(book)}
          >
            <span className="material-symbols-outlined text-[18px]">edit</span>
          </button>
          <button
            className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            title="حذف"
            onClick={() => onDelete(book._id)}
          >
            <span className="material-symbols-outlined text-[18px]">
              delete
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
}
