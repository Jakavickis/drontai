
import { useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function Squares() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, { number: rand(100, 999), color: randColor() }]);
    }

    return (
        <>
            <div className="container">
                {
                    sq.map((e, i) => <div style={{
                        fontSize: 25 + 'px',
                        backgroundColor: e.color
                    }} key={i}>{e.number}</div>)
                }
            </div>
            <button onClick={add}>add square</button>
        </>
    )
}

export default Squares;