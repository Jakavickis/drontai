import { useState } from "react";

function T3() {


    const [square, setSquare] = useState(false);


    return (
        <>
            <div className="container">
                {
                    square ? <div className="kvWithBorder" onClick={() => setSquare(false)}></div> : null
                }
            </div>
            <button onClick={() => setSquare(true)}>Add Square</button>
        </>
    )
}

export default T3;