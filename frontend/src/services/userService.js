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
}

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
}

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