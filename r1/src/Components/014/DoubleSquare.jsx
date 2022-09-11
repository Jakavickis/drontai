import { useState } from "react";

function DoubleSquare() {

    const [squares, setSquares] = useState([]);

    const add = () => {
        setSquares(s => [...s, 'red', 'blue'])
    }

    return (
        <>
            <div className="container">
                {
                    squares.map((s, i) => <div key={i} style={{ backgroundColor: s }}></div>)
                }
            </div>
            <button onClick={add}>Add squares</button>
        </>
    )
}

export default DoubleSquare;