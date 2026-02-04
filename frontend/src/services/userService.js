import api from "./api";

/**
 * @file userService.js
 * @description خدمة إدارة المستخدمين (User Service).
 * تحتوي على دوال الاتصال بالخادم (API Calls) الخاصة بـ Auth.
 */

/**
 * @function registerUser
 * @description إرسال طلب إنشاء حساب جديد.
 * @param {Object} userData - بيانات المستخدم (name, email, password).
 */
export const registerUser = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

/**
 * @function loginUser
 * @description إرسال طلب تسجيل الدخول.
 * @param {Object} userData - (email, password).
 */
export const loginUser = async (userData) => {
  // وحدنا المسار ليكون تحت /auth
  const response = await api.post("/signin", userData);

  // ملاحظة: شيلنا الـ localStorage من هنا عشان هنعملها في Redux
  // بنرجع الداتا على طول للـ Thunk
  return response.data;
};

/**
 * @function logoutUser
 * @description إرسال طلب تسجيل الخروج للسيرفر (اختياري حسب الـ Backend).
 */
export const logoutUser = async () => {
  try {
    await api.post("/logout");
  } catch (error) {
    console.error("Logout API failed", error);
  }

  // التنظيف الحقيقي بيحصل في Redux Reducer أو هنا
  // بس الأفضل نسيب الدالة دي ترجع Promise
};

export const getAllUsers = async (page = 1, limit = 10) => {
  const response = await api.get(`/users?page=${page}&limit=${limit}`);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

export const toggleBanUser = async (id) => {
  const response = await api.patch(`/users/${id}/ban`);
  return response.data;
};

export const changeUserRole = async (id, role) => {
  const response = await api.patch(`/users/${id}/role`, { role });
  return response.data;
};
