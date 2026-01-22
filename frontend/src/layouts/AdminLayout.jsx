import { Outlet, Link } from 'react-router-dom';

/**
 * @component AdminLayout
 * @description قالب لوحة تحكم المسؤول (Dashboard).
 * يحتوي على شريط جانبي (Sidebar) وترويسة (Header) ومساحة المحتوى المتغيرة.
 */
const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 text-right" dir="rtl">
      {/* Sidebar - القائمة الجانبية */}
      <aside className="w-64 bg-[#2c6777] text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">لوحة التحكم</h2>
        <nav className="space-y-4">
          <Link to="/admin" className="block hover:bg-white/10 p-2 rounded transition-colors">
            📊 الإحصائيات
          </Link>
          <Link to="/admin/products" className="block hover:bg-white/10 p-2 rounded transition-colors">
            📚 إدارة الكتب
          </Link>
          <Link to="/admin/users" className="block hover:bg-white/10 p-2 rounded transition-colors">
            👥 إدارة المستخدمين
          </Link>
          {/* رابط العودة للموقع الرئيسي */}
          <Link to="/" className="block mt-8 pt-8 border-t border-white/20 hover:bg-white/10 p-2 rounded transition-colors">
            🏠 العودة للمتجر
          </Link>
        </nav>
      </aside>

      {/* Main Content - المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col">
        {/* Header - ترويسة بسيطة للأدمن */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
             <span className="font-bold text-[#2c6777] md:hidden">لوحة التحكم</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 font-medium">مرحباً، المسؤول</span>
          </div>
        </header>

        {/* Page Content - محتوى الصفحة المتغير */}
        <main className="p-8">
          <div className="bg-white rounded-xl shadow-soft p-6 min-h-[calc(100vh-160px)]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
