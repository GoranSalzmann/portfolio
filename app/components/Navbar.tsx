export default function Navbar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <nav className="p-5 flex justify-between">
        {children}
    </nav>
}