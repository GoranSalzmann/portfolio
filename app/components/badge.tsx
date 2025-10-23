import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'gray' | 'green' | 'yellow' | 'red' | 'blue' | 'glass';
    border?: boolean;
    className?: string;
}

export default function Badge({
    children,
    variant = 'gray',
    border = false,
    className = ''
}: BadgeProps) {
    const baseClasses = "rounded-full px-2 py-0.5 text-sm";

    const variantClasses = {
        gray: "bg-gray-700/50 text-gray-300 border-gray-600/50",
        green: "bg-green-500/20 text-green-400 border-green-500/30",
        yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        red: "bg-red-500/20 text-red-400 border-red-500/30",
        blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        glass: "bg-white/10 text-white border-white/20 backdrop-blur-sm"
    };

    return (
        <span
            className={` ${border?"border":""} ${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </span>
    );
}
