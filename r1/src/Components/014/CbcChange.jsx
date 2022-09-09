import randColor from "../../Functions/randColor";
import { useState } from "react";

function CbcChange() {

    const [color, setColor] = useState({
        ba: randColor(),
        bo: randColor()
    });

    const changeColor = () => {
        setColor({
            ba: randColor(),
            bo: randColor()
        })
    }

    return (
        <>
            <div className="container">
                <div className="kvWithBorder" style={{
                    backgroundColor: color.ba,
                    borderColor: color.bo
                }}>

                </div>
                <button onClick={changeColor}>Change Color border and square</button>
            </div>
        </>
    )
}

export default CbcChange;