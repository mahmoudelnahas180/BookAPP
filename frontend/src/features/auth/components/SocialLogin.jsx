// src/features/auth/components/SocialLogin.jsx
export default function SocialLogin() {
    return (
        <>
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-surface-light text-text-muted">أو تابع باستخدام</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    {/* أيقونة جوجل - اختصرتها هنا للكود */}
                    <span className="text-text-main font-medium">جوجل</span>
                </button>
                <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    {/* أيقونة أبل - اختصرتها هنا للكود */}
                    <span className="text-text-main font-medium">أبل</span>
                </button>
            </div>
        </>
    );
}