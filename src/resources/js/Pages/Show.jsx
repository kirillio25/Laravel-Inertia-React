import { Link, useForm } from "@inertiajs/react";

export default function Show({ post }) {
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="p-4 border rounded-lg shadow-sm">
                <h1 className="text-xl font-bold mb-4">{post.body}</h1>

                <div className="flex gap-3">
                    <Link
                        href={`/posts/${post.id}/edit`}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Редактировать
                    </Link>

                    <form onSubmit={submit}>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        >
                            Удалить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );


}
