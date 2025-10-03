import {Link, useForm} from "@inertiajs/react";
export default function Show({post}){
    console.log(useForm());
    const {delete: destroy} = useForm();

    function submit(e){
        e.preventDefault()
        destroy(`/posts/${post.id}`);
    }

    return (
        <>
            <h1>{post.body}</h1>


            <Link href={`/posts/${post.id}/edit`}>Редактировать</Link>

            <div>
                <form onSubmit={submit}>
                    <button>delete</button>
                </form>
            </div>
        </>
    )
}
