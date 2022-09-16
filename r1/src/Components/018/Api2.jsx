import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Api2() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setPost(res.data.sort((a, b) => b.title.length - a.title.length))
            })
    }, [])

    return (
        <>
            <ul>
                {
                    post.map(p => <ul key={p.id}>{p.title}</ul>)
                }

            </ul>
        </>
    )
}

export default Api2;