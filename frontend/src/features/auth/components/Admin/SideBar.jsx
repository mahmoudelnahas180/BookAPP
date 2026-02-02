import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../authSlice";
import {
  faRightFromBracket,
  faChartLine,
  faBook,
  faTags,
  faUsers,
  faShoppingBag,
  faChartBar,
  faBookOpen,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoutModal from "./LogoutModal";

export default function SideBar({ isOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  /* State definition... */
  const [showLogoutConfirm, setShowLogoutConfirm] = React.useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    navigate("/login");
    setShowLogoutConfirm(false);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const navLinks = [
    {
      id: 1,
      path: "/admin",
      title: "لوحة التحكم",
      icon: faChartLine,
    },
    {
      id: 2,
      path: "/admin/products", // Updated path based on AdminLayout routes
      title: "الكتب",
      icon: faBook,
    },
    {
      id: 3,
      path: "/admin/categories", // Assuming this route exists or will exist
      title: "التصنيفات",
      icon: faTags,
    },
    {
      id: 4,
      path: "/admin/users",
      title: "المستخدمين",
      icon: faUsers,
      badge: 12,
    },
    {
      id: 5,
      path: "/admin/orders",
      title: "الطلبات",
      icon: faShoppingBag,
    },
    {
      id: 6,
      path: "/admin/reports",
      title: "التقارير",
      icon: faChartBar,
    },
  ];

  return (
    <aside
      className={`
        fixed inset-y-0 right-0 z-30 w-72 bg-surface-light dark:bg-surface-dark border-l border-slate-200 dark:border-slate-700 
        flex flex-col h-screen shrink-0 transition-transform duration-300 ease-in-out
        md:static md:translate-x-0 
        ${isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"}
      `}
    >
      {/* Logo Area */}
      <div className="h-20 flex items-center gap-3 px-8 border-b border-slate-100 dark:border-slate-700/50">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30">
          <FontAwesomeIcon icon={faBookOpen} className="text-[24px]" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
            مكتبتي
          </h1>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            لوحة الإدارة
          </span>
        </div>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {navLinks.map((link) => {
          // Determine if the link is active
          // For dashboard (/admin), exact match is needed to avoid highlighting on other admin pages
          // For others, check if the current path starts with the link path
          const isActive =
            link.path === "/admin"
              ? location.pathname === "/admin"
              : location.pathname.startsWith(link.path);

          return (
            <Link
              key={link.id}
              to={link.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive
                  ? "bg-primary/10 text-primary dark:text-teal-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <FontAwesomeIcon
                icon={link.icon}
                className={`text-[20px] ${
                  isActive ? "" : "group-hover:text-primary transition-colors"
                }`}
              />
              <span className="font-medium">{link.title}</span>
              {isActive && (
                <span className="mr-auto w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform"></span>
              )}
              {link.badge && (
                <span className="mr-auto text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-0.5 px-2 rounded-full font-numbers">
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="my-4 border-t border-slate-100 dark:border-slate-800 mx-4"></div>

        {/* Settings */}
        <Link
          to="/admin/settings"
          className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
            location.pathname.startsWith("/admin/settings")
              ? "bg-primary/10 text-primary dark:text-teal-400"
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
          }`}
        >
          <FontAwesomeIcon
            icon={faCog}
            className="text-[20px] group-hover:text-primary transition-colors"
          />
          <span className="font-medium">الإعدادات</span>
        </Link>
      </nav>
      {/* Admin Profile */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
          <div
            className="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-600 shadow-sm"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl6WGHX6QNLsrz9VpmdwLi5W60S_t0sk0COgPMXwzGzDtCmNGvF_5a3kTENO9cK4C1SjYWyZ3zcMyd9Jw1vn6QWQNYP8SX3AwxzouSMbkNfJK9EZEJwI1THhYRFfERw2JQ8w1c4M_04PmRquxQabycEkiB_xLO_i-GIDLyeEKlq6HKLCFcxpucfbXW8Lgek2tWDziE6hFmnJpLBO6oiE9kJTu6oTRBgCk-DbzeI7qJWHKZ3ycnXM_xIbW83cHOmwRPtr3vSgs1B5ee')",
            }}
          ></div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {user?.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                مدير النظام
              </span>
            </div>
            <button onClick={handleLogoutClick}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="mr-auto text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={confirmLogout}
      />
    </aside>
  );
}
