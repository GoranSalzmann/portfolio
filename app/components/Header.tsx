export default function Header({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <header className="absolute flex justify-between w-full">
        {children}
    </header>
}