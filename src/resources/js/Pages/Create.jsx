import {useForm} from "@inertiajs/react";

export  default function Create(){
    const { data,
        setData,
        post,
        errors,
        processing
        } = useForm(
            {
                body: "",
    });

    function submit(e){
        e.preventDefault()
        post("/posts")
    }

    // console.log(useForm());
    return(
        <>
            <h1>Create a new post</h1>
            {/*{data.body}*/}

            <div>
                <form onSubmit={submit}>
                    <textarea value={data.body}
                        onChange={(e) =>
                            setData('body', e.target.value)}>
                    </textarea>
                    {errors.body && <p>error ...</p>}

                    <button>create</button>
                </form>
            </div>
        </>
    )
}
