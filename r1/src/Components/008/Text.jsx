import { useState } from 'react';


function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#7caa0c');
    const [range, setRange] = useState(0);
    const [remember, setRemember] = useState('');

    const control = e => {
        // Number(e.target.value) && setText(e.target.value);
        setText(e.target.value);
    }
    const colorControl = e => {
        setColor(e.target.value);
    }
    const rangeControl = e => {
        setRange(parseInt(e.target.value));
    }

    return (

        <>
            <div className="form-container">
                <h2>TEXT: {remember}</h2>
                <input type="text" onChange={control} value={text}></input>
                <button onClick={() => setRemember(text)}>Remember Text</button>
            </div>
            <div className="form-container">
                <h2 style={{
                    color
                }}>COLOR</h2>
                <input type="color" onChange={colorControl} value={color}></input>
                <button onClick={() => setColor('red')}>color red</button>
            </div>
            <div className="form-container">
                <h2>RANGE: {('' + range)}</h2>
                <input type="range" onChange={rangeControl} value={range}></input>

                <div className="container div">
                    <button onClick={() => setRange(s => s - 10)}>minus 10</button>
                    <button onClick={() => setRange(s => s + 10)}>plus 10</button>
                </div>
            </div>
        </>
    )
}

export default Text;
