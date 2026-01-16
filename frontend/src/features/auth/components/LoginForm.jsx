import React, { useState } from 'react';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-surface-light rounded-2xl shadow-soft border border-gray-100 p-8 md:p-10 relative overflow-hidden group">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-primary via-teal-400 to-primary"></div>

            {/* Page Heading */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-serif font-bold text-text-main mb-2 leading-tight">أهلاً بك مجدداً</h2>
                <p className="text-text-muted text-base">تابع رحلة القراءة الخاصة بك، نحن سعداء بعودتك</p>
            </div>

            {/* Form */}
            <form action="#" className="space-y-5" method="POST" onSubmit={(e) => e.preventDefault()}>
                {/* Email Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-main" htmlFor="email">البريد الإلكتروني</label>
                    <div className="relative">
                        <input
                            className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
                            id="email"
                            name="email"
                            placeholder="user@example.com"
                            required
                            type="email"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-gray-400 text-[20px]">mail</span>
                        </div>
                    </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium text-text-main" htmlFor="password">كلمة المرور</label>
                    </div>
                    <div className="relative">
                        <input
                            className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
                            id="password"
                            name="password"
                            placeholder="********"
                            required
                            type={showPassword ? "text" : "password"}
                        />
                        <button
                            className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {showPassword ? "visibility" : "visibility_off"}
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-end pt-1">
                        <a className="text-sm text-primary hover:text-primary-hover font-medium underline-offset-4 hover:underline transition-all" href="#">نسيت كلمة المرور؟</a>
                    </div>
                </div>

                {/* Login Button */}
                <button className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                    <span>تسجيل الدخول</span>
                    <span className="material-symbols-outlined text-[20px] rtl:-scale-x-100">login</span>
                </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-surface-light text-text-muted">أو تابع باستخدام</span>
                </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" data-alt="Google Logo" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                        <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"></path>
                        <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
                        <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"></path>
                    </svg>
                    <span className="text-text-main font-medium">جوجل</span>
                </button>
                <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-text-main" data-alt="Apple Logo" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0729 2.00098C13.1587 3.9318 11.666 5.57276 9.87327 5.67292C9.64687 3.59345 11.4551 1.99609 13.0729 2.00098ZM16.3243 18.665C15.4241 19.9829 14.3421 21.9687 12.8687 21.9961C11.4391 22.0225 10.9782 21.1504 9.32483 21.1504C7.67149 21.1504 7.16854 21.9961 5.79354 22.0225C4.4285 22.0498 3.25076 19.981 2.5486 18.9667C1.1111 16.8925 0.0240479 13.1093 1.48807 10.5693C2.21464 9.30855 4.80549 6.89996 7.42637 6.89996C8.82579 6.89996 9.88207 7.84816 10.7327 7.84816C11.5832 7.84816 12.9731 6.89996 14.549 6.89996C15.1917 6.9273 17.5849 7.15973 18.7246 8.82418C18.6474 8.87301 16.6329 10.0576 16.6573 13.0692C16.6827 16.6904 19.7218 17.8828 19.7394 17.8916C19.7071 17.9942 19.208 19.7124 18.4286 20.8521C17.8182 21.7456 17.119 22.6284 16.3243 18.665Z"></path>
                    </svg>
                    <span className="text-text-main font-medium">أبل</span>
                </button>
            </div>

            {/* Footer Link */}
            <div className="mt-8 text-center animate-fade-in-up">
                <p className="text-text-muted">
                    ليس لديك حساب؟{" "}
                    <a className="text-primary font-bold hover:text-primary-hover hover:underline underline-offset-4 transition-all" href="#">إنشاء حساب جديد</a>
                </p>
            </div>

            {/* Minimal Copyright / Links */}
            <div className="mt-8 flex justify-center gap-6 text-xs text-gray-400">
                <a className="hover:text-gray-600 transition-colors" href="#">سياسة الخصوصية</a>
                <span className="w-1 h-1 rounded-full bg-gray-300 self-center"></span>
                <a className="hover:text-gray-600 transition-colors" href="#">شروط الاستخدام</a>
            </div>
        </div>
    );
}
