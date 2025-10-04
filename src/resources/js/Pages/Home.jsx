import { Link, usePage } from "@inertiajs/react";

export default function Home({ posts }) {
    const { flash } = usePage().props;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Hello</h1>

            {flash.message && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                    {flash.message}
                </div>
            )}

            {/*Тут нужно стилизовать и убрать next на последней странице*/}
            <div className="space-y-4">
                {posts.data.map((post) => (
                    <div
                        key={post.id}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <p className="mb-2">{post.body}</p>

                        {/* Можно использовать проще https://github.com/tighten/ziggy*/}
                        <Link
                            href={`posts/${post.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            Read more...
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 justify-center mt-6">
                {posts.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || "#"}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        preserveScroll
                        className={`px-3 py-1 rounded ${
                            link.active
                                ? "bg-blue-600 text-white"
                                : "text-blue-600 hover:bg-blue-100"
                        }`}
                    />
                ))}
            </div>
        </div>
    );


}
