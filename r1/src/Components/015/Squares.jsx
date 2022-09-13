import { useState } from "react";
import randColor from "../../Functions/randColor";

function Squares() {

    const [sq, setSq] = useState('crimson')

    const change = i => {
        setSq(c => c.filter(randColor()))
    }

    return (
        <>

            <div className="container">
                {
                    [...Array(10)].map((n, i) => <div style={{ backgroundColor: sq }} className="kv" key={i} onClick={() => change(i)}>{i + 1}</div>)
                }
            </div>
        </>
    )
}

export default Squares;
