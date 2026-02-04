import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

/**
 * @component Unauthorized
 * @description صفحة الوصول المرفوض (403 Forbidden).
 * تظهر عندما يحاول المستخدم الوصول لصفحة لا يملك صلاحياتها (مثلاً مستخدم عادي يحاول دخول صفحة الأدمن).
 */
const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <div className="bg-red-50 p-8 rounded-2xl shadow-soft max-w-md w-full">
        <div className="text-red-500 mb-4">
          {/* أيقونة تحذير */}
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="w-20 h-20 mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">غير مصرح لك!</h1>
        <p className="text-gray-600 mb-8">
          عذراً، ليس لديك الصلاحيات الكافية للوصول إلى هذه الصفحة.
        </p>

        {/* خيارات للمستخدم: العودة للرئيسية أو تبديل الحساب */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="bg-[#2c6777] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#225260] transition-colors"
          >
            العودة للرئيسية
          </Link>
          <Link
            to="/login"
            className="text-[#2c6777] font-medium hover:underline"
          >
            تسجيل الدخول بحساب آخر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
