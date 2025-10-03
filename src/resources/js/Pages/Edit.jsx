import {useForm} from "@inertiajs/react";

export  default function Create({post}){
    const { data,
        setData,
        put,
        errors,
        processing
    } = useForm(
        {
            body: post.body,
        });

    console.log(data.body);

    function submit(e){
        e.preventDefault()
        put(`/posts/${post.id}`)
    }

    // console.log(useForm());
    return(
        <>
            <h1>Update a new post</h1>
            {/*{data.body}*/}

            <div>
                <form onSubmit={submit}>
                    <textarea value={data.body}
                              onChange={(e) =>
                                  setData('body', e.target.value)}>
                    </textarea>
                    {errors.body && <p>error ...</p>}

                    <button>Обновить</button>
                </form>
            </div>
        </>
    )
}
