import rand from "../../Functions/rand"
import { useState } from "react"

function RandNumbers() {

    const [numb, setNumb] = useState([
        rand(1, 100), rand(1, 100), rand(1, 100)
    ])

    const sortNumb = () => {
        setNumb([
            rand(1, 100), rand(1, 100), rand(1, 100)
        ])
    }

    return (
        <>
            <div>
                {
                    [...numb].sort((a, b) => a - b).map((n, i) => <span key={i}>{n} </span>)
                }
            </div>
            <button onClick={sortNumb}>Numbers Sort</button>
        </>
    )
}


export default RandNumbers;