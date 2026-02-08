import Link from "next/link";

export default function NavItem({
    children,
    href
}: Readonly<{
    children: React.ReactNode;
    href: string;
}>) {
    return <Link href={href} className="text-lg mx-4">
        {children}
    </Link>
}