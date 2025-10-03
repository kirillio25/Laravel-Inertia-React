import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header className="bg-gray-800 text-white shadow">
                <nav className="container mx-auto flex items-center justify-between p-4">
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-gray-300 transition">
                            Home
                        </Link>
                        <Link href="/posts/create" className="hover:text-gray-300 transition">
                            Create
                        </Link>
                    </div>

                    <div className="text-sm text-gray-400">
                        React + Laravel + Inertia
                    </div>
                </nav>
            </header>

            <main className="container mx-auto p-6">
                {children}
            </main>
        </>
    );
}
