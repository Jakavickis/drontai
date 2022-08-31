import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('crimson');


    const control = e => {
        setText(e.target.value)
    }
    const changeColor = e => {
        setColor(e.target.value)
    }

    return (

        <>
            <div className="form-container">
                <h2 style={{
                    color: color
                }}>TEXT</h2>
                <input type="text" onChange={control} value={text}></input>
                <h1 style={{
                    color: color
                }}>COLOR</h1>
                <input type="color" onChange={changeColor}></input>
            </div>
        </>
    )
}

export default Text;