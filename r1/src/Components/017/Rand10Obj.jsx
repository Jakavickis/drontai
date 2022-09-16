import { useEffect } from "react";
import { useReducer } from "react";
import { actionRand, actionRandRand, actionReset, actionSortRand10, actionSortRand10Reverse } from "../../Actions/017";
import random10Obj from "../../Reducers/random10Obj";

function Rand10Obj() {

    const [random, dispachRandom] = useReducer(random10Obj, [])

    useEffect(() => {
        dispachRandom(actionRand())
    }, [])

    return (
        <>
            <div className="container">
                {
                    random.map((n, i) => <h4 key={i} style={{
                        borderBottom: n.line ? '2px solid orange' : null
                    }}>{n.numbers}</h4>)
                }
            </div>
            <div className='container'>
                <button onClick={() => dispachRandom(actionRand())}>render new 10</button>
                <button onClick={() => dispachRandom(actionSortRand10())}>sort rand numbers</button>
                <button onClick={() => dispachRandom(actionSortRand10Reverse())}>sort rand numbers reverse</button>
                <button onClick={() => dispachRandom(actionReset())}>sort reset</button>
                <button onClick={() => dispachRandom(actionRandRand())}>randomize</button>
            </div>
        </>
    )
}

export default Rand10Obj;