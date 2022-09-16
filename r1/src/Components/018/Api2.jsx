import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Api2() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setPost(res.data.sort((a, b) => a.title.length - b.title.length))
            })
    }, [])

    return (
        <>
            <ul>
                {
                    post.map(p => <ul style={{
                        color: p.title.length < 40 ? 'red' : null
                    }} key={p.id}>{p.title}</ul>)
                }

            </ul>
        </>
    )
}

export default Api2;