import { useState } from "react";
import { useReducer } from "react";
import { actionBorder, actionColor3, actionColor3BorderStle, actionSqSize } from "../../Actions/017";
import colorSqer from "../../Reducers/colorSqer";

function ColorSqer() {

    const [colors, dispachColorsSqer] = useReducer(colorSqer, {
        color: 1,
        size: 20,
        borders: 0,
        borderStyle: 'solid'
    });
    // const [sizeSq, dispachSizeSq] = useReducer(colorSqer, { size: 1 });

    const [border, setBorder] = useState(0);
    const [borderStyles, setBorderStyles] = useState('solid');

    return (
        <>
            <div className="container">
                <div className="kv" style={{
                    backgroundColor: ['crimson', 'blue', 'red'][colors.color - 1],
                    width: colors.size + 'px',
                    height: colors.size + 'px',
                    border: colors.borders + 'px ' + colors.borderStyle + ' pink'

                    // width: ['50px', '100px', '150px'][sizeSq.size - 1],
                    // height: ['50px', '100px', '150px'][sizeSq.size - 1]
                }}>
                </div>
                <button onClick={() => dispachColorsSqer(actionColor3())}>change sqer color</button>
                <button onClick={() => dispachColorsSqer(actionSqSize())}>change sqer color</button>
            </div>

            change border size <input type="number" value={border} onChange={e => setBorder(e.target.value)}></input>
            <button onClick={() => dispachColorsSqer(actionBorder(border))}>click change</button>

            <select value={borderStyles} onChange={e => setBorderStyles(e.target.value)}>
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
            </select>
            <button onClick={() => { dispachColorsSqer(actionColor3BorderStle(borderStyles)) }}>Set Border Style</button>
            <div>-------------------------------------------------</div>
        </>
    )
}

export default ColorSqer;