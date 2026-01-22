import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
            <div className="bg-red-50 p-8 rounded-2xl shadow-soft max-w-md w-full">
                <div className="text-red-500 mb-4">
                    <svg
                        className="w-20 h-20 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 15c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">غير مصرح لك!</h1>
                <p className="text-gray-600 mb-8">
                    عذراً، ليس لديك الصلاحيات الكافية للوصول إلى هذه الصفحة.
                </p>
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
