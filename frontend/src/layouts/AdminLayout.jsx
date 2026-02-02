import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SideBar from "../features/auth/components/Admin/SideBar";
import AdminHeader from "../features/admin/components/AdminHeader";
import { useLocation } from "react-router-dom";

/**
 * @component AdminLayout
 * @description قالب لوحة تحكم المسؤول (Dashboard).
 * يحتوي على شريط جانبي (Sidebar) وترويسة (Header) ومساحة المحتوى المتغيرة.
 */
const AdminLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  // admin/products/add
  if (location.pathname === "/admin/products/add") {
    return <Outlet />;
  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-sans min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}

      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        <AdminHeader onMenuClick={toggleSidebar} />
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-3 md:p-5 space-y-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
