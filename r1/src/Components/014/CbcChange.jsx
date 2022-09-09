import randColor from "../../Functions/randColor";
import { useState } from "react";

function CbcChange() {

    const [color, setColor] = useState('crimson');
    const [bColor, setBColor] = useState('blue')

    const changeColor = () => {
        setColor(randColor())
        setBColor(randColor())
    }

    return (
        <>
            <div className="container">
                <div className="kvWithBorder" style={{
                    backgroundColor: color,
                    borderColor: bColor
                }}>

                </div>
                <button onClick={changeColor}>Change Color border and square</button>
            </div>
        </>
    )
}

export default CbcChange;