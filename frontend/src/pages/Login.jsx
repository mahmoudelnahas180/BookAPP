// src/pages/Login.jsx
import React from 'react';
import LoginHeader from '../features/auth/components/LoginHeader';
import LoginForm from '../features/auth/components/LoginForm';
import SocialLogin from '../features/auth/components/SocialLogin';
import { Link } from 'react-router-dom';

/**
 * @component Login
 * @description صفحة تسجيل الدخول الرئيسية.
 * تقوم بتجميع مكونات النموذج (Header, Form, Social) وتعرضها داخل حاوية بتصميم جذاب.
 */
export default function Login() {
    return (
        <div className="bg-background-light font-display text-text-main antialiased min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300" dir="rtl">

            {/* Background Elements - عناصر الخلفية الجمالية */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed"></div>
                {/* تأثير Noise خفيف لإعطاء ملمس (Texture) */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            {/* Main Content - المحتوى الرئيسي */}
            <main className="flex-grow flex items-center justify-center p-4 z-10 relative">
                <div className="w-full max-w-[480px]">

                    <div className="bg-surface-light rounded-2xl shadow-soft border border-gray-100 p-8 md:p-10 relative overflow-hidden">
                        {/* Top Accent Line - خط علوي ملون */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-primary via-teal-400 to-primary"></div>

                        {/* Components Assembly - تجميع المكونات الفرعية */}
                        <LoginHeader />
                        <LoginForm />
                        <SocialLogin />

                        {/* Footer Links - روابط إضافية */}
                        <div className="mt-8 text-center animate-fade-in-up">
                            <p className="text-text-muted">
                                ليس لديك حساب؟{" "}
                                <Link className="text-primary font-bold hover:text-primary-hover hover:underline underline-offset-4 transition-all" to="/signup">إنشاء حساب جديد</Link>
                            </p>
                        </div>

                        <div className="mt-8 flex justify-center gap-6 text-xs text-gray-400">
                            <a className="hover:text-gray-600 transition-colors" href="#">سياسة الخصوصية</a>
                            <span className="w-1 h-1 rounded-full bg-gray-300 self-center"></span>
                            <a className="hover:text-gray-600 transition-colors" href="#">شروط الاستخدام</a>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}