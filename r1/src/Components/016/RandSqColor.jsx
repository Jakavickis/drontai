import { useEffect } from "react";
import { useState } from "react";
import randColor from "../../Functions/randColor";

function RandSqColor() {

    const [sq, setSq] = useState([]);

    useEffect(() => {
        const c = randColor();
        setSq([...Array(10)].map((_, i) => ({ color: c, id: i + 1 })))
    }, [])

    const change = id => {
        setSq(square => square.map(s => s.id === id ? { ...s, color: randColor() } : { ...s }))
    }

    return (
        <>
            <div className="container">
                {
                    sq.map(s => <div onClick={() => change(s.id)} key={s.id} style={{
                        backgroundColor: s.color
                    }}></div>)
                }
            </div>

        </>
    )
}

export default RandSqColor;