import './App.scss';
import Count from './Components/016/Count';
import RandSqColor from './Components/016/RandSqColor';

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h2>UseReducer</h2>
                <Count />
                <RandSqColor />
            </header>
        </div >
    );
}

export default App;