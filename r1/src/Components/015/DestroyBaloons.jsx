import { useEffect } from "react";
import { useState } from "react";
// import randColor from "../../Functions/randColor";

function DestroyBaloons() {

    const [baloon, setBaloon] = useState([]);

    useEffect(() => {
        setBaloon([...Array(10)])
    }, [])


    return (
        <>
            <div className="container">
                {
                    baloon.map((b, i) => <div onClick={() => setBaloon(c => c.filter(co => b === co ? 'none' : 'block'))} style={{ display: { b } }} className="ap" key={i}></div>)
                }
            </div>
        </>
    )
}

export default DestroyBaloons;