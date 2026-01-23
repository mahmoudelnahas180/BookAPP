import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

/**
 * @component Header
 * @description الشريط العلوي للموقع (Navbar).
 * يحتوي على الروابط الرئيسية، logo، وأزرار الدخول/التسجيل.
 * متجاوب (Responsive) ويتحول لقائمة جانبية في الشاشات الصغيرة.
 */
export default function Header() {
    // قائمة الروابط
    const navLinks = [
        { name: 'الرئيسية', path: '/' },
        { name: 'المنتجات', path: '/products' },
        { name: 'تواصل معنا', path: '/contact' },
        { name: 'عن التطبيق', path: '/about' },
    ];
    //loged in user
    const [user, setUser] = useState(null);
    const [isLogedIn, setIsLogedIn] = useState(false);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        console.log(storedUser);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLogedIn(true);
        }
    }, []);

    const [isScrolled, setIsScrolled] = useState(false); // حالة التمرير لتغيير خلفية الهيدر
    const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة القائمة الجانبية (للموبايل)
    const location = useLocation(); // لمعرفة الصفحة الحالية وتلوين الرابط النشط

    // Effect: تغيير شكل الهيدر عند التمرير
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Effect: منع تمرير الصفحة الخلفية عند فتح قائمة الموبايل
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    // دالة مساعدة لمعرفة هل الرابط مفعل (Active)
    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent
            ${isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-soft py-3 border-gray-100" // شكل الهيدر عند التمرير
                    : "bg-transparent py-5" // شكله في البداية
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-3xl text-primary">auto_stories</span>
                    </div>
                    <span className="text-2xl font-bold font-serif text-text-main tracking-tight">BookApp</span>
                </Link>

                {/* Desktop Nav - الروابط للشاشات الكبيرة */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            className={`relative font-medium text-base transition-colors duration-300
                            ${isActive(link.path) ? "text-primary" : "text-gray-500 hover:text-primary"}
                            `}
                        >
                            {link.name}
                            {/* خط تحت الرابط النشط */}
                            {isActive(link.path) && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                            )}
                            {/* خط يظهر عند التحويم (Hover) */}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 w-0 hover:w-full ${!isActive(link.path) && "group-hover:w-full"}`}></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions - أزرار الدخول في الشاشات الكبيرة */}
                <div className="hidden md:flex items-center gap-3">
                    <button className="p-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </button>

                    <div className="h-6 w-px bg-gray-200 mx-1"></div>
                    {isLogedIn ? (
                         <p>{user.name}</p>
                    ) : (
                       <>  <Link to="/signup">
                            <Button className="!rounded-xl !px-6 !py-2 shadow-lg shadow-primary/20 hover:shadow-primary/40">
                                إنشاء حساب
                            </Button>
                        </Link>
                          <Link to="/login">
                            <button className="px-6 py-2 rounded-xl font-medium transition-all duration-300 bg-transparent hover:bg-gray-50 text-gray-600 hover:text-primary">
                                تسجيل الدخول
                            </button>
                        </Link></>
                    )}
                    
                </div>

                {/* Mobile Toggle - زر القائمة للموبايل */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 text-text-main hover:bg-gray-100 rounded-lg transition-colors z-[110]"
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay - طبقة شفافة سوداء */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Mobile Menu Sidebar - القائمة الجانبية نفسها */}
            <div
                className={`fixed top-0 left-0 w-[80%] max-w-[300px] h-full bg-white z-[100] md:hidden shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                dir="rtl"
            >
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl text-primary">auto_stories</span>
                        <span className="text-xl font-bold text-text-main">BookApp</span>
                    </div>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                                ${isActive(link.path)
                                    ? "bg-primary/10 text-primary"
                                    : "text-gray-600 hover:bg-gray-50"
                                }
                            `}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Actions */}
                <div className="p-6 border-t border-gray-100 space-y-3 bg-gray-50/50">
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-white hover:border-gray-300 transition-all flex items-center justify-center gap-2">
                            <span>تسجيل الدخول</span>
                        </button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full !rounded-xl justify-center">
                            إنشاء حساب جديد
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
