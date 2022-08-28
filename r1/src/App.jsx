import { useState } from 'react';
import './App.scss';

function App() {

    const [color, setColor] = useState('crimson');
    const [size, setSize] = useState(30);

    // const doJob = () => {
    //     console.log('do job');
    // }

    const clicked = () => {
        setColor('skyblue')
    }

    const doSize = () => {
        setSize('40')
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{
                    color: color,
                    fontSize: size + 'px'
                }}>STATE</h1>
                <button onClick={() => clicked()}>click!</button>
                <button onClick={() => doSize()}>font size!</button>
            </header>
        </div>
    );
}

export default App;
