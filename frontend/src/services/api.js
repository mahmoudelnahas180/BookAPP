/**
 * @file api.js
 * @description إعداد مكتبة Axios للتواصل مع السيرفر.
 * يقوم بإنشاء نسخة (Instance) موحدة مع الإعدادات الافتراضية.
 */

import axios from "axios";

// رابط الباك إند الأساسي
const API_BASE_URL = "http://localhost:3000";
// إنشاء نسخة Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// إعداد المعترضات (Interceptors)
// ملاحظة: الكود الحالي يستخدم response.use ولكنه يقوم بتعديل الـ headers،
// وهذا عادة يتم في request.use. تم الإبقاء عليه كما هو حسب التعليمات.
api.interceptors.request.use(
  (config) => {
    // محاولة جلب التوكن من التخزين المحلي
    const token = localStorage.getItem("token");
    if (token) {
      // إرفاق التوكن في ترويسة الطلب
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default api;
