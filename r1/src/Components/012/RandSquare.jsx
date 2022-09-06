import { useState, useEffect } from "react";
import randColor from "../../Functions/randColor";

function RandSquare() {

    const [color, setColor] = useState('red');

    useEffect(() => {

        let data = localStorage.getItem('color_key')
        if (null === data) {
            setColor('red');
        } else {
            setColor(JSON.parse(data))
        }

    }, [])

    useEffect(() => {
        if (null === color) {
            return;
        }
        localStorage.setItem('color_key', JSON.stringify(color))

    }, [color])

    const change = () => {
        setColor(randColor())
    }

    return (
        <>
            <div style={{
                width: 100 + 'px',
                height: 100 + 'px',
                backgroundColor: color
            }}>
            </div>
            <button onClick={change}>Change Square Color</button>
        </>
    )
}

export default RandSquare;