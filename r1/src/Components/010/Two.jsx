import { useState } from "react"

function Two({ setBox, setCircle }) {

    const [cbox1, setCbox1] = useState(false);
    const [cbox2, setCbox2] = useState(false);

    return (
        <>
            <div className="form-container">
                <div>
                    <input type="checkbox" id="_2" onChange={() => setCbox1(c => !c)} checked={cbox1}></input>
                    <label htmlFor="_2" style={{ color: cbox1 ? 'crimson' : null }}>ONE</label>
                </div>
                <button onClick={() => setBox(cbox1)}></button>
            </div>
            <div className="form-container">
                <div>
                    <input type="checkbox" id="_3" onChange={() => setCbox2(c => !c)} checked={cbox2}></input>
                    <label htmlFor="_3" style={{ color: cbox2 ? 'crimson' : null }}>TWO</label>
                </div>
                <button onClick={() => setCircle(cbox2)}></button>
            </div>
        </>
    )
}

export default Two;