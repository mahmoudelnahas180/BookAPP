import React from "react";

export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-6 max-w-sm w-full border border-slate-100 dark:border-slate-700 animate-in fade-in zoom-in duration-200">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-center">
          تسجيل الخروج
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-center mb-6">
          هل أنت متأكد من رغبتك في تسجيل الخروج؟
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
          >
            إلغاء
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors font-medium"
          >
            نعم، خروج
          </button>
        </div>
      </div>
    </div>
  );
}
