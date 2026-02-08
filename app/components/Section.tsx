export default function Section({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>
        {children}
    </section>
}