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
    const highlighted = usePathname() === href;
    return <Link href={href} className={`text-lg mx-4 flex font-semibold ${highlighted ? 'underline underline-offset-8':""} hover:scale-110 active:rotate-4`}>
        {children}
    </Link>
}