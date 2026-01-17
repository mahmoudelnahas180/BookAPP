import api from "./api";

// 1. تسجيل مستخدم جديد
export const registerUser = async (userData) => {
    const response = await api.post("/register", userData);
    return response.data;
}

// 2. تسجيل الدخول
export const loginUser = async (userData) => {
    // وحدنا المسار ليكون تحت /auth
    const response = await api.post("/signin", userData);

    // ملاحظة: شيلنا الـ localStorage من هنا عشان هنعملها في Redux
    // بنرجع الداتا على طول للـ Thunk
    return response.data;
}

// 3. تسجيل الخروج
export const logoutUser = async () => {
    try {
        await api.post("/logout");
    } catch (error) {
        console.error("Logout API failed", error);
    }

    // التنظيف الحقيقي بيحصل في Redux Reducer أو هنا
    // بس الأفضل نسيب الدالة دي ترجع Promise
};