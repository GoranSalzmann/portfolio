import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function Badge({
    children,
    variant = 'default',
    size = 'md',
    className = ''
}: BadgeProps) {
    const baseClasses = "inline-flex items-center font-medium rounded-full transition-all duration-300 ease-out";

    const sizeClasses = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base"
    };

    const variantClasses = {
        default: "bg-gray-700/50 text-gray-300 border border-gray-600/50",
        success: "bg-green-500/20 text-green-400 border border-green-500/30",
        warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
        error: "bg-red-500/20 text-red-400 border border-red-500/30",
        info: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
        glass: "bg-white/10 text-white border border-white/20 backdrop-blur-sm"
    };

    return (
        <span
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </span>
    );
}
