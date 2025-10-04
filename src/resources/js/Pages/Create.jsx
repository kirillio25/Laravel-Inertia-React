import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-xl font-bold mb-4">Создать новый пост</h1>

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
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:opacity-50"
                >
                    {processing ? "Создание..." : "Создать"}
                </button>
            </form>
        </div>
    );


}
