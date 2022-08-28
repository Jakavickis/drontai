import { useState } from 'react';
import './App.scss';

function App() {

    const [color, setColor] = useState('crimson');
    const [size, setSize] = useState(30);
    const [number, setNumber] = useState(1)

    // const doJob = () => {
    //     console.log('do job');
    // }

    const clicked = () => {
        setColor(c => c === 'skyblue' ? 'crimson' : 'skyblue')
    }

    const doSize = () => {
        setSize(40)
    }

    const numberCount = () => {
        setNumber(c => c + 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{
                    color: color,
                    fontSize: size + 'px'
                }}>STATE {number}</h1>
                <button onClick={() => clicked()}>click!</button>
                <button onClick={() => doSize()}>font size!</button>
                <button onClick={() => numberCount()}>plus one!</button>
            </header>
        </div>
    );
}


export default App;
