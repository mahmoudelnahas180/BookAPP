
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice"; // Assuming this exists
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faSearch,
  faShoppingCart,
  faBars,
  faTimes,
  faUser,
  faSignOutAlt,
  faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // قائمة الروابط المحدثة
  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "الكتب", path: "/books" },
    { name: "التصنيفات", path: "/categories" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout()); // Ensure logout action exists
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent font-display
            ${
              isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-soft py-3 border-gray-100 dark:bg-slate-900/90 dark:border-slate-800"
                : "bg-transparent py-5"
            }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <FontAwesomeIcon icon={faBookOpen} className="text-2xl text-primary" />
          </div>
          <span className="text-2xl font-bold font-serif text-slate-900 dark:text-white tracking-tight">
            مكتبتي
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`relative font-medium text-base transition-colors duration-300
                            ${isActive(link.path) ? "text-primary font-bold" : "text-slate-600 dark:text-slate-300 hover:text-primary"}
                            `}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative p-2 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900 transform translate-x-1 -translate-y-1 font-numbers">
                {totalQuantity}
              </span>
            )}
          </Link>

          <div className="h-6 w-px bg-gray-200 dark:bg-slate-700 mx-1"></div>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-xs text-slate-500">
                  {user.role === "admin" ? "مدير النظام" : "قارئ مميز"}
                </p>
              </div>

              {/* Simple Dropdown Trigger (Could be expanded) */}
              <div className="relative group">
                <button className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="w-full h-full flex items-center justify-center text-primary font-bold text-lg">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden hidden group-hover:block animate-fade-in-up">
                  {user.role === "admin" && (
                    <Link
                      to="/admin"
                      className="block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-700"
                    >
                      <FontAwesomeIcon icon={faTachometerAlt} className="ml-2" />
                      لوحة التحكم
                    </Link>
                  )}
                  <Link
                    to="/profile"
                    className="block px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    <FontAwesomeIcon icon={faUser} className="ml-2" />
                    الملف الشخصي
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-right px-4 py-3 text-sm hover:bg-red-50 text-red-600 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="ml-2" />
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                تسجيل الدخول
              </Link>
              <Link to="/signup">
                <Button className="!rounded-xl !px-6 !py-2.5 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                  حساب جديد
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Cart */}
          <Link
            to="/cart"
            className="relative p-1 text-slate-600 dark:text-slate-300"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            {totalQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full font-numbers">
                {totalQuantity}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[80%] max-w-[300px] h-full bg-white dark:bg-slate-900 z-[100] md:hidden shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        dir="rtl"
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <FontAwesomeIcon icon={faBookOpen} className="text-2xl text-primary" />
          <span className="text-xl font-bold font-serif text-slate-900 dark:text-white">
            مكتبتي
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                                ${
                                  isActive(link.path)
                                    ? "bg-primary/10 text-primary border border-primary/20"
                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                                }
                            `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
          {user ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
              </div>
              {user.role === "admin" && (
                <Link
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-white dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  لوحة التحكم
                </Link>
              )}
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-all flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                تسجيل الخروج
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-white dark:hover:bg-slate-800 transition-all">
                  تسجيل الدخول
                </button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full !rounded-xl justify-center">
                  إنشاء حساب جديد
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
```
