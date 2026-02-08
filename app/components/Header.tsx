export default function Header({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <header className="fixed flex justify-between w-full z-10 backdrop-blur-sm">
        {children}
    </header>
}