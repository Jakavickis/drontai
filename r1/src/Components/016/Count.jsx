import { useReducer } from "react";
import { add1, rem1, add2, rem2, rem5, add5, randomColor } from "../../Actions/count";
import count from "../../Reducers/count";

function Count() {

    const [counter, dispachCounter] = useReducer(count, {
        number: 0,
        color: 'green'
    });

    return (
        <>
            <h2 style={{ color: counter.color }}>{counter.number}</h2>
            <div className="container">
                <button onClick={() => dispachCounter(add1())}>+1</button>
                <button onClick={() => dispachCounter(rem1())}>-1</button>
                <button onClick={() => dispachCounter(add2())}>+2</button>
                <button onClick={() => dispachCounter(rem2())}>-2</button>
                <button onClick={() => dispachCounter(add5())}>+5</button>
                <button onClick={() => dispachCounter(rem5())}>-5</button>
                <button onClick={() => dispachCounter(randomColor())}>random color</button>
            </div>
        </>
    )
}

export default Count;