import { useState } from "react";
import { useReducer } from "react"
import { actionMinusBut, actionPlusBut } from "../../Actions/017";
import countTest from "../../Reducers/countTest";

function PlusMinus() {

    const [number, dispachNumber] = useReducer(countTest, {
        count: 0
    });

    const [inputNumber, setInputNumber] = useState(0);

    return (
        <>
            <h2>{number.count}</h2>
            Type number: <input type="number" value={inputNumber} onChange={e => setInputNumber(e.target.value)}></input>
            <div>
                <button onClick={() => dispachNumber(actionPlusBut(inputNumber))}>add + number</button>
                <button onClick={() => dispachNumber(actionMinusBut(inputNumber))}>remove - number</button>
            </div>
        </>
    )
}

export default PlusMinus;