
import { useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function Squares() {

    const [sq, setSq] = useState([]);
    const [selected, setSelected] = useState(null);

    const add = () => {
        // setSq(s => [...s, '']) tiesiog kvadratukas
        setSq(s => [...s, {
            number: rand(100, 999),
            color: randColor(),
            row: s.length,
            show: true
        }]);
    }

    const sortHigh = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number))
    }
    const sortLow = () => {
        setSq(s => [...s].sort((a, b) => a.number - b.number))
    }
    const noSort = () => {
        setSq(s => s.map(square => ({ ...square, show: true }))
            .sort((a, b) => a.row - b.row))
    }
    const filterBlack = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: true } : { ...square, show: false }))
    }
    const filterColored = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: false } : { ...square, show: true }))
    }

    return (
        <>
            <h1>{selected} STATE {sq.filter(s => s.number < 300).length}</h1>
            <div className="container">
                {
                    sq.map((e, i) => e.show ? <div style={{
                        fontSize: 25 + 'px',
                        backgroundColor: e.number > 300 ? e.color : 'black',
                        borderRadius: e.number % 2 ? 50 + '%' : null,
                    }} key={i} onClick={() => setSelected(e.number)}>{e.number}</div> : null)
                }
            </div>
            <button onClick={add}>add square</button>
            <div className="container">
                <button onClick={sortHigh}>sort high low</button>
                <button onClick={sortLow}>sort low hight</button>
            </div>
            <button onClick={noSort}>square no sort</button>
            <div className="container">
                <button onClick={filterBlack}>only black</button>
                <button onClick={filterColored}>all collored</button>
            </div>
        </>
    )
}


export default Squares;