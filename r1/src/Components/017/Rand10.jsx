import { useEffect } from "react";
import { useReducer } from "react";
import { actionRand } from "../../Actions/017";
import random10 from "../../Reducers/random10";

function Rand10() {

    const [random, dispachRandom] = useReducer(random10, [])

    useEffect(() => {
        dispachRandom(actionRand())
    }, [])

    return (
        <>
            <div className="container">
                {
                    random.map((n, i) => <h4 key={i}>{n}</h4>)
                }
            </div>
            <button onClick={() => dispachRandom(actionRand())}>render new 10</button>
        </>
    )
}

export default Rand10;