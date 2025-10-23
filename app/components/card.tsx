import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'glass' | 'outlined';
    hover?: boolean;
    style?: React.CSSProperties;
}

export default function Card({
    children,
    className = '',
    variant = 'default',
    hover = false,
    style
}: CardProps) {
    const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300 ease-out";

    const variantClasses = {
        default: "bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm",
        glass: "bg-white/5 border border-white/10 backdrop-blur-md",
        outlined: "bg-transparent border-2 border-gray-700/50"
    };

    const hoverClasses = hover
        ? "hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30"
        : "";

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
            style={{
                willChange: 'transform',
                ...style
            }}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
    return (
        <div className={`p-6 pb-0 ${className}`}>
            {children}
        </div>
    );
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return (
        <div className={`p-6 pb-4 ${className}`}>
            {children}
        </div>
    );
}

interface CardFooterProps {
    children: ReactNode;
    className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
    return (
        <div className={`p-6 pt-8 ${className}`}>
            {children}
        </div>
    );
}
