import { useEffect, useState } from "react";
import randColor from "../../Functions/randColor";

function Test1() {

    const [sqer, setSqer] = useState([]);

    useEffect(() => {
        setSqer([...Array(10)].map((_, i) => ({ id: i, color: 'crimson' })))
    }, []);

    const click = id => {
        setSqer(sq => sq.map(s => s.id === id ? { ...s, color: randColor() } : { ...s }))
    }

    return (
        <>
            <div className="container">
                {
                    sqer.map(s => <div onClick={() => click(s.id)} className="kv" key={s.id} style={{
                        backgroundColor: s.color
                    }}></div>)
                }
            </div>
        </>
    )
}

export default Test1;