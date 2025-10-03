import {Link, usePage} from "@inertiajs/react";
import { progress } from '@inertiajs/react'

export default function Home({ posts }){
    console.log(usePage());
    console.log(posts);

    const {flash} = usePage().props;

    return (
        <>
            <h1>Hello</h1>
            {flash.message && <div>{flash.message}</div>}

            {/*Тут нужно стилизовать и убрать next на последней странице*/}
            <div>
                {posts.data.map(post => (
                    <div key={post.id}>
                        <p>{post.body}</p>

                        {/* Можно использовать проще https://github.com/tighten/ziggy*/}
                        <Link href={`posts/${post.id}`}>Read more...</Link>

                    </div>
                ))}
            </div>

            <div style={{ marginTop: "20px" }}>
                {posts.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url || "#"}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        preserveScroll
                        className={link.active ? "font-bold text-blue-600" : ""}
                    />
                ))}
            </div>
        </>
    )
}



