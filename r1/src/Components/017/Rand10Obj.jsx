import { useEffect, useState } from "react";
import { useReducer } from "react";
import { actionRand, actionRandRand, actionReset, actionSortRand10, actionSortRand10Reverse, actionTripleShow, actionTripleShowReset } from "../../Actions/017";
import random10Obj from "../../Reducers/random10Obj";

function Rand10Obj() {

    const [random, dispachRandom] = useReducer(random10Obj, [])
    const [pos, setPos] = useState(null);

    useEffect(() => {
        dispachRandom(actionRand())
    }, [])

    useEffect(() => {
        if (pos === null) {
            return;
        }
        dispachRandom(actionTripleShow(pos));
    }, [pos]);

    return (
        <>
            <div className="container">
                {
                    random.map((n, i) => n.show ?
                        <h4 key={i} style={{
                            borderBottom: n.line ? '2px solid orange' : null
                        }}>{n.numbers}</h4>
                        : null)
                }
            </div>
            <div className='container'>
                <button onClick={() => dispachRandom(actionRand())}>render new 10</button>
                <button onClick={() => dispachRandom(actionSortRand10())}>sort rand numbers</button>
                <button onClick={() => dispachRandom(actionSortRand10Reverse())}>sort rand numbers reverse</button>
                <button onClick={() => dispachRandom(actionReset())}>sort reset</button>
                <button onClick={() => dispachRandom(actionRandRand())}>randomize</button>
                <button onClick={() => setPos(p => !(p ?? false))}>Show Hide</button>
                <button onClick={() => dispachRandom(actionTripleShowReset())}>Show all</button>
            </div>
        </>
    )
}

export default Rand10Obj;