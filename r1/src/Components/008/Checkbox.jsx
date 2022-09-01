import { useState } from "react";
import rand from "../../Functions/rand";

function Checkbox() {

    const [cb, setCb] = useState({ A: false, B: true, C: true, D: false })

    const change = e => {
        const v = e.target.value;
        setCb(c => ({ ...c, [v]: !c[v] })) // jei v = 'A' => A; !c.A;
    }

    const onclick = () => {
        setCb({
            A: !rand(0, 1),
            B: !rand(0, 1),
            C: !rand(0, 1),
            D: !rand(0, 1)
        })
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
        </>


    )
}

export default Checkbox;