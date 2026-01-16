import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const UserLayout = () => {
    return (
        <>
            <Header />
            <main>
                {/* Outlet هنا هو المكان اللي هيظهر فيه محتوى الصفحة (Home, About, etc) */}
                <Outlet />
            </main>
            {/* وممكن تضيف Footer هنا كمان */}
        </>
    );
};

export default UserLayout;