import { useState } from 'react';
import './App.scss';

function App() {

    const [color, setColor] = useState('crimson');
    const [size, setSize] = useState(30);
    const [number, setNumber] = useState(1)
    const [ls, setLs] = useState(20)

    // const doJob = () => {
    //     console.log('do job');
    // }

    const clicked = () => {
        setColor(c => c === 'skyblue' ? 'crimson' : 'skyblue')
    }
    const doSize = () => {
        setSize(f => f === 40 ? 30 : 40)
    }
    const numberCount = () => {
        setNumber(c => c + 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{
                    color: color,
                    fontSize: size + 'px',
                    letterSpacing: ls + 'px'
                }}>STATE {number}</h1>
                <button onClick={() => clicked()}>click!</button>
                <button onClick={() => doSize()}>font size!</button>
                <button onClick={() => numberCount()}>plus one!</button>
                <div>
                    <button onClick={() => setLs(20)}>LS 20!</button>
                    <button onClick={() => setLs(10)}>LS 10!</button>
                </div>
            </header>
        </div>
    );
}


export default App;
