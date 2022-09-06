import { useState, useEffect } from "react";

function Plus() {

    const [plus, setPlus] = useState(null)

    useEffect(() => {

        let data = localStorage.getItem('plus_key')
        if (null === data) {
            setPlus('');
        } else {
            setPlus(JSON.parse(data))
        }

    }, [])

    useEffect(() => {
        if (null === plus) {
            return;
        }
        localStorage.setItem('plus_key', JSON.stringify(plus))

    }, [plus])

    const addPlus = () => {
        setPlus(p => p + '+')
    }

    return (
        <>
            <div>
                {
                    plus
                }
            </div>
            <button onClick={addPlus}>Add Plus</button>
        </>
    )
}

export default Plus;