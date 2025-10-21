import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
    variant?: 'default' | 'hero' | 'feature' | 'minimal';
}

export default function Section({
    children,
    title,
    subtitle,
    className = '',
    variant = 'default'
}: SectionProps) {
    const baseClasses = "relative py-16 lg:py-24";

    const variantClasses = {
        default: "bg-gray-900/30",
        hero: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
        feature: "bg-gray-800/20",
        minimal: "bg-transparent"
    };

    return (
        <section
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={{
                transform: 'translateZ(0)',
                willChange: 'transform'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && (
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                <div className="relative">
                    {children}
                </div>
            </div>
        </section>
    );
}
