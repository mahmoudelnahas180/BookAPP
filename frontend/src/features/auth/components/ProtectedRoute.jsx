import { Navigate, Outlet, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

/**
 * @component ProtectedRoute
 * @description مكون حماية المسارات (Guard Component).
 * يقوم بمنع الوصول للصفحات المحمية إلا إذا كان المستخدم مسجلاً ولديه الصلاحيات المناسبة.
 *
 * @param {Array} allowedRoles - قائمة بالأدوار المسموح لها بدخول هذا المسار (مثال: ['admin', 'user']).
 * @returns {JSX.Element} - يعيد مكون <Outlet /> إذا كان الدخول مسموحاً، أو توجيه <Navigate /> لصفحة الدخول/الخطأ.
 *
 * المنطق (Logic):
 * 1. يتأكد من وجود الـ Token في التخزين المحلي.
 * 2. يفك تشفير الـ Token للتأكد من صلاحيته (Expiry).
 * 3. يتأكد من أن دور المستخدم (Role) موجود ضمن الـ allowedRoles.
 */
export default function ProtectedRoute({ allowedRoles }) {
    const location = useLocation(); // نحتفظ بالموقع الحالي لإعادة المستخدم إليه بعد تسجيل الدخول
    const token = localStorage.getItem('token');

    // 1. التحقق من وجود التوكن
    if (!token) {
        // إذا لم يوجد توكن، حوّله لصفحة الدخول واحفظ المسار الذي جاء منه (state)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    try {
        const decodedToken = jwtDecode(token); // فك تشفير التوكن لقراءة البيانات (Payload)
        const currentTime = Date.now() / 1000; // الوقت الحالي بالثواني
         
        // 2. التحقق من انتهاء صلاحية التوكن
        if (decodedToken.exp < currentTime) {
            localStorage.removeItem('token'); // حذف التوكن المنتهي
            return <Navigate to="/login" state={{ from: location }} replace />;
        }

        // 3. التحقق من الصلاحيات (Authorization)
        // إذا تم تمرير allowedRoles، نتأكد أن دور المستخدم مسموح به
        if (allowedRoles && !allowedRoles.includes(decodedToken.role)) {
            // المستخدم مسجل دخول لكن ليس لديه صلاحية (مثلاً مستخدم عادي يحاول دخول لوحة الأدمن)
            return <Navigate to="/unauthorized" state={{ from: location }} replace />;
        }

        // 4. السماح بالدخول
        // <Outlet /> تمثل المكونات الفرعية (Children) داخل هذا المسار المحمي
        return <Outlet />;

    } catch (err) {
        // في حالة وجود خطأ في فك التشفير (توكن معطوب مثلاً)
        console.error("Token decoding failed:", err);
        localStorage.removeItem('token');
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
}
