import './App.scss';
import ColorSqer from './Components/017/ColorSqer';
import PlusMinus from './Components/017/PlusMinus';
import Rand10 from './Components/017/Rand10';
import Rand10Obj from './Components/017/Rand10Obj';


function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h2>UseReducer 2</h2>
                <ColorSqer />
                <PlusMinus />
                <Rand10 />
                <Rand10Obj />
            </header>
        </div >
    );
}

export default App;