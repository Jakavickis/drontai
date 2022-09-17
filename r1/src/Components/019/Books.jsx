import { useEffect, useState } from "react";
import axios from 'axios';

function Books() {

    const [books, setBooks] = useState(null);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => {
                console.log(res);
                setBooks(res.data)
            })
    }, [])

    return (
        <>
            <ul>
                {
                    books?.map((b, i) => <li key={b.id}>{b.title}</li>)
                }
            </ul>
        </>
    )
}

export default Books;