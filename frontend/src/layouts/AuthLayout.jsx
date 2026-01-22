import { Outlet } from 'react-router-dom';

/**
 * @component AuthLayout
 * @description قالب صفحات المصادقة (تسجيل الدخول، إنشاء حساب).
 * يستخدم لتطبيق تصميم مشترك لهذه الصفحات (مثل وضع شعار أو خلفية موحدة) بدون Header/Footer.
 */
const AuthLayout = () => {
    return (
        <>
            {/* يمكن إضافة عناصر مشتركة هنا مثل Logo في أعلى المنتصف */}
            <Outlet /> {/* سيتم عرض محتوى صفحة Login أو SignUp هنا */}
        </>
    );
};

export default AuthLayout;