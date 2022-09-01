import { useState } from "react";
import rand from "../../Functions/rand";

const checksData = { A: false, B: true, C: true, D: false }
const radioData = { A: false, B: false, C: true, D: false }

function Checkbox() {

    const [cb, setCb] = useState(checksData);
    const [radio, setRadio] = useState(radioData);
    const [boxState, setBoxState] = useState(false);
    const [paint, setPaint] = useState(false);
    const [cb1, setCb1] = useState(false);
    const [cb2, setCb2] = useState(false);


    const change = e => {
        const v = e.target.value;
        setCb(c => ({ ...c, [v]: !c[v] })) // jei v = 'A' => A; !c.A;
    }

    const onclick = () => {
        const checks = {};
        for (const a in checksData) {  // for cicle neiteruojamams, map tik iteruojamams objektams.
            checks[a] = !rand(0, 1);
        }
        setCb(checks)

        // setCb({
        //     A: !rand(0, 1),
        //     B: !rand(0, 1),
        //     C: !rand(0, 1),
        //     D: !rand(0, 1)
        // })
    }

    const radioChange = e => {
        const v = e.target.value;
        const r = {};
        for (const a in radioData) {
            r[a] = a === v ? true : false;
        }
        setRadio(r);
    }

    return (
        <>
            <div className="form-container">
                <div>
                    <input type="checkbox" value="A" id="_1" onChange={change} checked={cb.A}></input>
                    <label htmlFor="_1" style={{ color: cb.A ? 'crimson' : null }}>A Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="B" id="_2" onChange={change} checked={cb.B}></input>
                    <label htmlFor="_2" style={{ color: cb.B ? 'crimson' : null }}>B Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="C" id="_3" onChange={change} checked={cb.C}></input>
                    <label htmlFor="_3" style={{ color: cb.C ? 'crimson' : null }}>C Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="D" id="_4" onChange={change} checked={cb.D}></input>
                    <label htmlFor="_4" style={{ color: cb.D ? 'crimson' : null }}>D Raide</label>
                </div>
                <button onClick={onclick}>Random checkbox</button>
            </div>

            <div className="form-container">
                <div>
                    <input type="checkbox" value="A" id="_5" onChange={radioChange} checked={radio.A}></input>
                    <label htmlFor="_5" style={{ color: radio.A ? 'crimson' : null }}>A Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="B" id="_6" onChange={radioChange} checked={radio.B}></input>
                    <label htmlFor="_6" style={{ color: radio.B ? 'crimson' : null }}>B Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="C" id="_7" onChange={radioChange} checked={radio.C}></input>
                    <label htmlFor="_7" style={{ color: radio.C ? 'crimson' : null }}>C Raide</label>
                </div>
                <div>
                    <input type="checkbox" value="D" id="_8" onChange={radioChange} checked={radio.D}></input>
                    <label htmlFor="_8" style={{ color: radio.D ? 'crimson' : null }}>D Raide</label>
                </div>
            </div>
            <div className="form-container">
                <div className="container div">
                    <div style={{
                        backgroundColor: paint ? 'black' : 'crimson'
                    }}></div>
                </div>
                <div>
                    <input type="checkbox" id="_9" onChange={() => setBoxState(s => s = !s)} checked={boxState}></input>
                    <label htmlFor="_9" style={{ color: boxState ? 'crimson' : null }}>Checkbox</label>
                </div>
                <button onClick={() => setPaint(boxState)}>MYGTUKAS</button>
            </div>

            <div className="form-container">
                <div className="container div">
                    <div style={{
                        backgroundColor: cb1 && cb2 === true ? 'red' : 'black'
                    }}></div>
                </div>
                <div className="form-container">
                    <input type="checkbox" id="_10" onChange={() => setCb1(s => s = !s)} checked={cb1}></input>
                    <label htmlFor="_10" style={{ color: cb1 ? 'crimson' : null }}>Color</label>
                    <input type="checkbox" id="_11" onChange={() => setCb2(s => s = !s)} checked={cb2}></input>
                    <label htmlFor="_11" style={{ color: cb2 ? 'crimson' : null }}>Color</label>
                </div>
            </div>
            <h1>Commit</h1>


        </>


    )
}

export default Checkbox;