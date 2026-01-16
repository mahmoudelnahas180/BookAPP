// src/features/auth/components/RegisterForm.jsx
import { useState } from 'react';

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("تم تقديم طلب التسجيل");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name Field (حقل جديد) */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-text-main" htmlFor="name">الاسم الكامل</label>
                <div className="relative">
                    <input
                        className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
                        id="name"
                        type="text"
                        placeholder="الاسم الثنائي"
                        required
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-gray-400 text-[20px]">person</span>
                    </div>
                </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-text-main" htmlFor="email">البريد الإلكتروني</label>
                <div className="relative">
                    <input
                        className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
                        id="email"
                        type="email"
                        placeholder="user@example.com"
                        required
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-gray-400 text-[20px]">mail</span>
                    </div>
                </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-text-main" htmlFor="password">كلمة المرور</label>
                <div className="relative">
                    <input
                        className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        required
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {showPassword ? "visibility" : "visibility_off"}
                        </span>
                    </button>
                </div>
                {/* Password Strength Hint (اختياري) */}
                <p className="text-xs text-text-muted mt-1">يجب أن تكون كلمة المرور 8 أحرف على الأقل</p>
            </div>

            {/* Register Button */}
            <button className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                <span>إنشاء حساب</span>
                <span className="material-symbols-outlined text-[20px] rtl:-scale-x-100">person_add</span>
            </button>
        </form>
    );
}