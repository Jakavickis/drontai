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

    if (null === books) {
        return (
            <div className="loader-bin">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        );
    }


    return (
        <>
            <div className="books">
                {
                    books?.map((b, i) => <div className="book" key={b.id}>
                        <h2>{b.title}</h2>
                        <h4>{b.author}</h4>
                        <img src={b.img} alt="img"></img>
                        <div className="price">Price: {b.price}$</div>
                    </div>)
                }
            </div>
        </>
    )
}

export default Books;