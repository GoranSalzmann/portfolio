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
        default: "bg-gradient-to-br bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 border border-stone-700",
        glass: "bg-gradient-to-br bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 backdrop-blur-sm",
        outlined: "bg-transparent border-2 border-stone-700/50"
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
