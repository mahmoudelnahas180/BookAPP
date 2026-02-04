// src/features/auth/components/RegisterForm.jsx
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

/**
 * @component SignUpForm
 * @description نموذج إنشاء حساب جديد.
 * يجمع بيانات المستخدم (الاسم، البريد، كلمة المرور) ويرسلها للخادم.
 */
export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false); // تبديل حالة رؤية كلمة المرور

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم تقديم طلب التسجيل");
    // هنا يجب إضافة منطق الاتصال بـ Redux (مثل dispatch(registerThunk))
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Field - حقل الاسم */}
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-text-main"
          htmlFor="name"
        >
          الاسم الكامل
        </label>
        <div className="relative">
          <input
            className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
            id="name"
            type="text"
            placeholder="الاسم الثنائي"
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-400 text-[20px]"
            />
          </div>
        </div>
      </div>

      {/* Email Field - حقل البريد */}
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-text-main"
          htmlFor="email"
        >
          البريد الإلكتروني
        </label>
        <div className="relative">
          <input
            className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
            id="email"
            type="email"
            placeholder="user@example.com"
            required
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-400 text-[20px]"
            />
          </div>
        </div>
      </div>

      {/* Password Field - حقل كلمة المرور */}
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-text-main"
          htmlFor="password"
        >
          كلمة المرور
        </label>
        <div className="relative">
          <input
            className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
            id="password"
            type={showPassword ? "text" : "password"} // تبديل الرؤية
            placeholder="********"
            required
          />
          {/* زر تبديل رؤية كلمة المرور */}
          <button
            type="button"
            className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="text-[20px]"
            />
          </button>
        </div>
        {/* تلميح لقوة كلمة المرور */}
        <p className="text-xs text-text-muted mt-1">
          يجب أن تكون كلمة المرور 8 أحرف على الأقل
        </p>
      </div>

      {/* Register Button - زر التسجيل */}
      <button
        className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2"
        type="submit"
      >
        <span>إنشاء حساب</span>
        <FontAwesomeIcon
          icon={faUserPlus}
          className="text-[20px] rtl:-scale-x-100"
        />
      </button>
    </form>
  );
}
