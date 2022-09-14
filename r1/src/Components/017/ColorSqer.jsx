import { useReducer } from "react";
import { actionColor3, actionSqSize } from "../../Actions/017";
import colorSqer from "../../Reducers/colorSqer";

function ColorSqer() {

    const [colors, dispachColorsSqer] = useReducer(colorSqer, {
        color: 1,
        size: 20
    });
    // const [sizeSq, dispachSizeSq] = useReducer(colorSqer, { size: 1 });

    return (
        <>
            <div className="container">
                <div className="kv" style={{
                    backgroundColor: ['crimson', 'blue', 'red'][colors.color - 1],
                    width: colors.size + 'px',
                    height: colors.size + 'px'
                    // width: ['50px', '100px', '150px'][sizeSq.size - 1],
                    // height: ['50px', '100px', '150px'][sizeSq.size - 1]
                }}>
                </div>
                <button onClick={() => dispachColorsSqer(actionColor3())}>change sqer color</button>
                <button onClick={() => dispachColorsSqer(actionSqSize())}>change sqer color</button>
            </div>
        </>
    )
}

export default ColorSqer;