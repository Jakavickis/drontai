import { useState, useEffect } from 'react';


function Squares() {

    const [squares, setSquares] = useState(null);


    useEffect(() => {

        let data = localStorage.getItem('squares_key')
        if (null === data) {
            setSquares([]);
        } else {
            setSquares(JSON.parse(data))
        }

    }, [])

    useEffect(() => {
        if (null === squares) {
            return;
        }
        localStorage.setItem('squares_key', JSON.stringify(squares))

    }, [squares])

    const add = () => {
        setSquares(s => [...s, ''])
    }

    return (
        <>
            <div className="container">
                {
                    squares?.map((_, i) => <div key={i}>{squares}</div>)
                }
            </div>
            <button onClick={add}>Square[ ]</button>
            <button onClick={() => setSquares([])}>Reset [ ]</button>
        </>
    )
}

export default Squares;