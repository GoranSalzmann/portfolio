'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
    children,
    href
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) {
    const highlighted = usePathname() == href;
    return (
        <Link
            href={href}
            className={`group relative text-lg mx-4 flex font-semibold hover:scale-110 active:rotate-4`}
        >
            <span>{children}</span>
            <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-current transform transition-transform duration-200 origin-left group-hover:scale-x-100 ${highlighted ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-50'}`}
                aria-hidden="true"
            />
        </Link>
    );
}