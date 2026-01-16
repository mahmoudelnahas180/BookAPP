// src/pages/Register.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // للتنقل بين الصفحات
import SignUpForm from '../features/auth/components/SignUpForm';
import SocialLogin from '../features/auth/components/SocialLogin'; // إعادة استخدام

export default function Signup() {
    return (
        <div className="bg-background-light font-display text-text-main antialiased min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300" dir="rtl">

            {/* Background Elements (نفس خلفية الـ Login بالضبط) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delayed"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center p-4 z-10 relative">
                <div className="w-full max-w-[480px]">

                    <div className="bg-surface-light rounded-2xl shadow-soft border border-gray-100 p-8 md:p-10 relative overflow-hidden">
                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-primary via-teal-400 to-primary"></div>

                        {/* Header Area (مخصص للتسجيل) */}
                        <div className="flex justify-center mb-8">
                            <div className="flex items-center gap-3 text-primary">
                                <div className="bg-primary/10 p-2 rounded-xl">
                                    <span className="material-symbols-outlined text-3xl text-primary">auto_stories</span>
                                </div>
                                <h1 className="text-2xl font-bold tracking-tight text-text-main font-serif">BookApp</h1>
                            </div>
                        </div>

                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-serif font-bold text-text-main mb-2 leading-tight">انضم إلينا</h2>
                            <p className="text-text-muted text-base">أنشئ حسابك الجديد وابدأ رحلتك المعرفية اليوم</p>
                        </div>

                        {/* Form */}
                        <SignUpForm />

                        {/* Social Login (Reused!) */}
                        <SocialLogin />

                        {/* Footer Links (عكس صفحة الدخول) */}
                        <div className="mt-8 text-center animate-fade-in-up">
                            <p className="text-text-muted">
                                لديك حساب بالفعل؟{" "}
                                <Link to="/login" className="text-primary font-bold hover:text-primary-hover hover:underline underline-offset-4 transition-all">
                                    تسجيل الدخول
                                </Link>
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