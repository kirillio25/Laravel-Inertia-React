import { useForm } from "@inertiajs/react";

export default function Create({ post }) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    });

    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-xl font-bold mb-4">Редактировать пост</h1>

            <form onSubmit={submit} className="space-y-4">
                <div>
                <textarea
                    value={data.body}
                    onChange={(e) => setData("body", e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={5}
                />
                    {errors.body && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.body}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {processing ? "Обновление..." : "Обновить"}
                </button>
            </form>
        </div>
    );


}
