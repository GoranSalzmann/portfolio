import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'glass';
    size?: 'sm' | 'md' | 'lg';
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
}: ButtonProps) {
    const baseClasses = "cursor-pointer font-medium rounded-lg transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    };

    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 focus:ring-blue-500",
        secondary: "bg-gray-700 hover:bg-gray-600 text-white shadow-lg hover:shadow-xl hover:shadow-gray-500/25 hover:scale-105 focus:ring-gray-500",
        ghost: "bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white hover:scale-105 focus:ring-gray-500",
        outline: "border-2 border-gray-600 hover:border-blue-500 bg-transparent text-gray-300 hover:text-white hover:bg-blue-500/10 hover:scale-105 focus:ring-blue-500",
        glass: "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm hover:scale-105 focus:ring-white/50"
    };

    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
        >
            {children}
        </button>
    );
}
