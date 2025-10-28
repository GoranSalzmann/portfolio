import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    variant?: 'default' | 'glass' | 'outlined';
    hoverable?: boolean;
}

export default function Card({
    children,
    variant = 'default',
}: CardProps) {
    const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300 ease-out";

    const variantClasses = {
        default: "bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm",
        glass: "bg-white/5 border border-white/10 backdrop-blur-md",
        outlined: "bg-transparent border-2 border-gray-700/50"
    };

    return (
        <div
            className={`${baseClasses} ${variantClasses[variant]}`}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
    return (
        <div className={`p-6 pb-0`}>
            {children}
        </div>
    );
}

interface CardContentProps {
    children: ReactNode;
}

export function CardContent({ children }: CardContentProps) {
    return (
        <div className={`p-6 pb-4`}>
            {children}
        </div>
    );
}

interface CardFooterProps {
    children: ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
    return (
        <div className={`p-6 pt-8`}>
            {children}
        </div>
    );
}
