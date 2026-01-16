import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            {/* هنا ممكن تحط لوجو أو خلفية مشتركة لصفحات الدخول */}
            <Outlet />
        </>
    );
};

export default AuthLayout;