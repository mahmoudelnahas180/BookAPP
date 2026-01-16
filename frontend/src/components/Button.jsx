import React from 'react';

export default function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = "transition-all duration-300 transform hover:-translate-y-0.5 rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-[#2c6777] text-white hover:bg-[#225260]",
        outline: "bg-white text-[#2c6777] border border-[#2c6777] hover:bg-[#2c6777] hover:text-white",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
