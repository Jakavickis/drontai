import './App.scss';
import T01 from './Components/015/T01';
import T012 from './Components/015/T012';
import { useState } from 'react';
import T02 from './Components/015/T02';
import T022 from './Components/015/T022';
import T03 from './Components/015/T03';
import T032 from './Components/015/T032';
import T033 from './Components/015/T033';
import T04 from './Components/015/T04';
import T042 from './Components/015/T042';

function App() {

    const [count, setCount] = useState(0);
    const counting = () => {
        setCount(c => c + 19)
    }

    const [square, setSquare] = useState(false);

    const [circleHop, setCircleHop] = useState(true);
    const move = () => {
        setCircleHop(c => !c)
    }

    const [testDir, setTestDir] = useState(true);
    const move2 = () => {
        setTestDir(c => !c)
    }

    const [addSquare, setAddSquare] = useState([])

    const plus = () => {
        setAddSquare(s => [...s, ''])
    }

    return (
        <div className="App">

            <header className="App-header">
                <h2> Total recall 2</h2>
                <T012 count={count} />
                <T01 counting={counting} />
                <T022 square={square} />
                <T02 setSquare={setSquare} />
                <div>
                    <h2>
                        <T03 circleHop={circleHop} move={move} />
                    </h2>
                    <div>????</div>
                    <h5>
                        <T032 circleHop={circleHop} move={move} />
                    </h5>
                </div>
                <div>
                    <h2>
                        <T033 testDir={testDir} move2={move2} dir={true} />
                    </h2>
                    <div>????</div>
                    <h5>
                        <T033 testDir={testDir} move2={move2} dir={false} />
                    </h5>
                </div>
                <T04 plus={plus} />
                <T042 addSquare={addSquare} />

            </header>

        </div >
    );
}

export default App;