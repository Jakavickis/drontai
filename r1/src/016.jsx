import './App.scss';
import Count from './Components/016/Count';
import RandSqColor from './Components/016/RandSqColor';
import Test1 from './Components/016/Test1';

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h2>UseReducer</h2>
                <Count />
                <RandSqColor />
                <Test1 />
            </header>
        </div >
    );
}

export default App;