export default function SectionContent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>
        {children}
    </div>
}