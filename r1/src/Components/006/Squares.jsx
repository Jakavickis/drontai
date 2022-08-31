
import { useEffect } from "react";
import { useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function Squares() {

    const [sq, setSq] = useState([]);
    const [selected, setSelected] = useState(null);
    const [color, setColor] = useState(randColor());
    const [sort, setSort] = useState(1);

    useEffect(() => {
        setColor(randColor());
    }, [sq]);

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
    const doClick = (num) => {
        setSelected(num);
        setSq(s => s.map(square => square.number === num ? { ...square, show: false } : { ...square }));
    }
    const res = () => {
        setSq(s => s.map(square => square.number === selected ? { ...square, show: true } : { ...square }));
    }
    const filter5 = () => {
        setSq(s => s.map((square, i) => i < 5 ? { ...square, show: true } : { ...square, show: false }));
    }
    const sorting = () => {
        setSq(s => [...s].sort((a, b) => sort * (a.number - b.number)))
        setSort(s => s * -1);
    }

    // const sorting = () => {
    //     sort ? sortHigh() : sortLow();
    //     setSort(s => !s);
    // }

    return (
        <>
            <h1 style={{
                color: color
            }}>{selected} STATE {sq.filter(s => s.number < 300).length}</h1>
            <div className="container">
                {
                    sq.map((e, i) => e.show ? <div style={{
                        fontSize: 25 + 'px',
                        backgroundColor: e.number > 300 ? e.color : 'black',
                        borderRadius: e.number % 2 ? 50 + '%' : null,
                    }} key={i} onClick={() => doClick(e.number)}>{e.number}</div> : null)
                }
            </div>
            <button onClick={add}>add square</button>
            <div className="container">
                <button onClick={sortHigh}>sort high low</button>
                <button onClick={sortLow}>sort low hight</button>
            </div>
            <button onClick={noSort}>square default</button>
            <div className="container">
                <button onClick={filterBlack}>only black</button>
                <button onClick={filterColored}>all collored</button>
            </div>
            <button onClick={res}>resurect</button>
            <button onClick={filter5}>5 elements</button>
            <button onClick={filter5}>5 elements</button>
            <button onClick={sorting}>sort both ways</button>
        </>
    )
}


export default Squares;