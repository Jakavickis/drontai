
import { useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function Squares() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, { number: rand(100, 999), color: randColor() }]);
    }

    const sortNumbers = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number))
    }

    return (
        <>
            <div className="container">
                {
                    sq.map((e, i) => <div style={{
                        fontSize: 25 + 'px',
                        backgroundColor: e.color,
                        borderRadius: e.number % 2 ? 50 + '%' : null,
                    }} key={i}>{e.number}</div>)
                }
            </div>
            <button onClick={add}>add square</button>
            <button onClick={sortNumbers}>sort</button>
        </>
    )
}

export default Squares;