import Link from "next/link";

export default function NotFound() {
    return (
        <div className="top-80 flex items-center justify-center px-4 absolute w-screen">
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Sorry, the page you're looking for doesn't exist.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
