import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-6 text-lg text-white bg-gray-800">
            <h1 className="hover:font-semibold"><Link href="/">Logo</Link></h1>
            <ul className="flex gap-6">
                <li className="hover:font-semibold">
                    <Link href="/cv">Lebenslauf</Link>
                </li>
                <li className="hover:font-semibold">
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="hover:font-semibold">
                    <Link href="/contact">Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}