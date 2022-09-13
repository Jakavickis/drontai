import { useReducer } from "react";
import { add1, rem1, add2, rem2, rem5, add5, randomColor, randomFont, borderShowHide, addSquare, remSquare } from "../../Actions/count";
import count from "../../Reducers/count";
import sq from "../../Reducers/sq";

function Count() {

    const [counter, dispachCounter] = useReducer(count, {
        number: 0,
        color: 'green',
        fontSize: 40 + 'px',
        border: true
    });

    const [sqer, dispachSqer] = useReducer(sq, [])

    return (
        <>
            <div className="container">
                {
                    sqer.map((_, i) => <div className="kv" key={i}></div>)
                }</div>
            <button onClick={() => dispachSqer(addSquare())}>add square</button>
            <button onClick={() => dispachSqer(remSquare())}>rem square</button>
            <h2 style={{
                color: counter.color,
                fontSize: counter.fontSize,
                border: counter.border ? '1px solid black' : null
            }}>{counter.number}</h2>
            <div className="container">
                <button onClick={() => dispachCounter(add1())}>+1</button>
                <button onClick={() => dispachCounter(rem1())}>-1</button>
                <button onClick={() => dispachCounter(add2())}>+2</button>
                <button onClick={() => dispachCounter(rem2())}>-2</button>
                <button onClick={() => dispachCounter(add5())}>+5</button>
                <button onClick={() => dispachCounter(rem5())}>-5</button>
                <button onClick={() => dispachCounter(randomColor())}>random color</button>
                <button onClick={() => dispachCounter(randomFont())}>random fontsize</button>
                <button onClick={() => dispachCounter(borderShowHide())}>border show hide</button>
            </div>
        </>
    )
}

export default Count;
