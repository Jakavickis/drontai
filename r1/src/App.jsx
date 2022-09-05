import { useEffect, useState, useRef } from 'react';
import './App.scss';
import Dog from './Components/011/Dog';
import randColor from './Functions/randColor';
import Nine from './Components/011/Nine';


function App() {
    const [dogs, setDogs] = useState([]);
    const [count, setCount] = useState(1);
    const index = useRef(0);
    const addButton = useRef();
    const [nine, setNine] = useState([]);


    const addNine = () => {
        if (nine.length < 9) {
            setNine(n => [...n, randColor()]);
        }
    }

    useEffect(() => {
        const b = addButton.current;
        b.focus();
    }, [])

    const add = () => {
        setDogs(d => [...d, ++index.current])
    }

    const addCount = () => {
        setCount(c => c + 1)
    }

    useEffect(() => {
        console.log('Dogs Changed Or Added 1');
        console.log('count is: ' + count);
        // setCount(c => c + 1) galima uzciklinti 
    }, [dogs, count]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect {count}</h1>
                <div className="container">
                    {
                        dogs.map((n, i) => <Dog key={n} i={n}></Dog>)
                    }
                </div>
                <div className="container">
                    <button onClick={add} id="add-button" ref={addButton}>Add Dog</button>
                    <button onClick={addCount}>Plus Count</button>
                </div>
                <Nine nine={nine} setNine={setNine}></Nine>
                <button onClick={addNine}>Add Nine</button>
            </header>
        </div>
    );
}

export default App;