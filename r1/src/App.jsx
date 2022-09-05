import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Dog from './Components/011/Dog';


function App() {
    const [dogs, setDogs] = useState([]);

    const add = () => {
        setDogs(d => [...d, d.length])
    }

    useEffect(() => {
        console.log('Dogs Changed')
    }, [dogs])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Use Effect</h1>
                <div className="container">
                    {
                        dogs.map((n, i) => <Dog key={n} i={n}></Dog>)
                    }
                </div>
                <div className="container">
                    <button onClick={add}>Add Dog</button>
                </div>
            </header>
        </div>
    );
}

export default App;