import React from 'react';
export default function Header() {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 z-50 ${isScrolled ? "bg-white/90 shadow-md backdrop-blur-md py-3" : "bg-white py-5"}`}>

            {/* Logo */}
            <a href="https://prebuiltui.com" className="flex items-center gap-2">
                <img src="./logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className="group relative text-gray-600 hover:text-[#F86D72] font-medium transition-colors duration-300">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F86D72] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <button className="text-gray-600 hover:text-[#F86D72] transition-colors">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
                <button className="ml-4 bg-[#F86D72] text-white hover:bg-[#dd6165] shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 w-auto px-6 rounded-full">
                    Login
                </button>
                <button className="ml-2 bg-white text-[#F86D72] border border-[#F86D72] hover:bg-[#F86D72] hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 w-auto px-6 rounded-full">
                    Sign Up
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-6 w-6 cursor-pointer text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg z-[100] text-base flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="bg-gray-500 absolute top-6 right-6 p-2 text-gray-600 hover:text-[#F86D72]  closed" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-[#F86D72] transition-colors">
                        {link.name}
                    </a>
                ))}

                <div className="flex flex-col gap-4 mt-4">
                    <button className="bg-[#F86D72] text-white px-10 py-3 rounded-full shadow-lg hover:bg-[#dd6165] transition-all w-auto">
                        Login
                    </button>
                    <button className="bg-white text-[#F86D72] border-2 border-[#F86D72] px-10 py-3 rounded-full shadow-lg hover:bg-[#F86D72] hover:text-white transition-all w-auto">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
}
