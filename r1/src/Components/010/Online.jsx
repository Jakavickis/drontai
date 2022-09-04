import { useState } from "react";

function Online() {

    const [text, setText] = useState('');

    const control = e => {
        setText(e.target.value)
    }



    return (
        <>
            <h2 style={{
                textTransform: text === "lowercase" ? "uppercase" : "uppercase",
            }}>{text}</h2>
            <div>
                <input type="text" onChange={control} value={text}></input>
            </div>
        </>
    )

}

export default Online;