// src/features/auth/components/SocialLogin.jsx

/**
 * @component SocialLogin
 * @description مكون أزرار الدخول عبر وسائل التواصل الاجتماعي (Google, Apple).
 * يعرض فاصل "أو تابع باستخدام" وأزرار المنصات المختلفة.
 */
export default function SocialLogin() {
    return (
        <>
            {/* Divider - فاصل بصري */}
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-surface-light text-text-muted">أو تابع باستخدام</span>
                </div>
            </div>

            {/* Social Buttons Container */}
            <div className="grid grid-cols-2 gap-4">
                {/* Google Button */}
                <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    {/* أيقونة جوجل */}
                    <span className="text-text-main font-medium">جوجل</span>
                </button>
                {/* Apple Button */}
                <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    {/* أيقونة أبل */}
                    <span className="text-text-main font-medium">أبل</span>
                </button>
            </div>
        </>
    );
}