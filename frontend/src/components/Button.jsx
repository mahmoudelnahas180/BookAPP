import React from "react";

/**
 * @component Button
 * @description مكون زر قابل لإعادة الاستخدام (Reusable Button).
 * يدعم عدة أنماط (Styles) ويمكن تخصيصه بسهولة.
 *
 * @param {node} children - محتوى الزر (نص أو أيقونات).
 * @param {string} variant - نمط الزر ( 'primary' | 'outline' ).
 * @param {string} className - كلاسات CSS إضافية (Tailwind).
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props // استقبال أي خصائص أخرى (onClick, disabled, type, etc)
}) {
  // التنسيقات المشتركة لجميع الأزرار
  const baseStyles =
    "transition-all duration-300 transform hover:-translate-y-0.5 rounded-[10px] px-6 py-2 font-medium shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2";

  // تعريف الأنماط المختلفة
  const variants = {
    primary: "bg-[#2c6777] text-white hover:bg-[#225260]", // لون أساسي
    outline:
      "bg-white text-[#2c6777] border border-[#2c6777] hover:bg-[#2c6777] hover:text-white", // مفرغ بحدود
  };

  return (
    <button
      // دمج الكلاسات: الأساسية + النمط المختار + كلاسات المستخدم الإضافية
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
