import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

/**
 * @component UserLayout
 * @description القالب الرئيسي للمستخدمين.
 * يضمن وجود الرأس (Header) في جميع الصفحات التي تستخدم هذا القالب.
 */
const UserLayout = () => {
    return (
        <>
            <Header /> {/* الشريط العلوي الثابت */}
            <main>
                {/* Outlet: المكان الذي يتم فيه render للصفحة الحالية (مثل Home) */}
                <Outlet />
            </main>
            {/* يمكن إضافة Footer هنا مستقبلاً */}
        </>
    );
};

export default UserLayout;