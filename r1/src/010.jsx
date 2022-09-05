import './App.scss';
import Text from './Components/010/Text';
import { useState } from 'react';
import Online from './Components/010/Online';
import Two from './Components/010/Two';
import OnlineInput from './Components/010/OnlineInput';

function App() {

    const [textNow, setTextNow] = useState('');
    const [box, setBox] = useState(false);
    const [circle, setCircle] = useState(false);
    const [text, setText] = useState('');


    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                <h2>TEXT: {textNow}</h2>
                <Text setTextNow={setTextNow} />
                <OnlineInput text={text} />
                <Online setText={setText} text={text} />
                <div className='container'>
                    {box ? <div className="kv"></div> : null}
                    {circle ? <div className="ap"></div> : null}
                </div>
                <Two setBox={setBox} setCircle={setCircle} />
            </header>
        </div>
    );
}

export default App;