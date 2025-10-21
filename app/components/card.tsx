import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'glass' | 'outlined';
    hover?: boolean;
    style?: React.CSSProperties;
    bgImageUrl?: string; // optional background image shown on right with a diagonal mask
    bgOpacity?: number; // 0..1 opacity for the image
    bgDim?: number; // 0..1 black overlay intensity over the image
    bg?: string; // optional generic CSS background (e.g., linear-gradient)
}

export default function Card({
    children,
    className = '',
    variant = 'default',
    hover = true,
    style,
    bgImageUrl,
    bgOpacity = 0.25,
    bgDim = 0.35,
    bg
}: CardProps) {
    const baseClasses = "relative overflow-hidden rounded-xl transition-all duration-300 ease-out";

    const variantClasses = {
        default: "bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm",
        elevated: "bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm shadow-2xl",
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
                transform: 'translateZ(0)',
                willChange: 'transform',
                ...style
            }}
        >
            {(bg || bgImageUrl) && (
                <>
                    {/* Image layer clipped with diagonal mask, only right side visible */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                            ...(bg
                                ? { background: bg }
                                : { backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: bgOpacity }
                            ),
                            opacity: bg ? 1 : bgOpacity,
                            // Diagonal mask: from ~20% at bottom to ~55% at top to create a rising diagonal
                            clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 20% 100%)'
                        }}
                    />
                    {/* Dimming overlay to preserve contrast over the image area only */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background: 'rgba(0,0,0,' + bgDim + ')',
                            clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 20% 100%)'
                        }}
                    />
                </>
            )}
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
        <div className={`p-6 pb-4 ${className}`}>
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
        <div className={`p-6 pt-0 ${className}`}>
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
        <div className={`p-6 pt-4 ${className}`}>
            {children}
        </div>
    );
}
