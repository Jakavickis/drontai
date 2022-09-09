import { useState } from "react";

function ManyButtons() {

    const [numb, setNumb] = useState(0);

    return (
        <>
            <h1>{numb}</h1>
            <div className="container">
                {
                    [...Array(50)].map((_, i) => <button onClick={() => setNumb(i + 1)} key={i}>{i + 1}</button>)
                }
            </div>
        </>
    )
}

export default ManyButtons;