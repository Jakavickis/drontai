

import './App.scss';
import CbcChange from './Components/014/CbcChange';
import DoubleSquare from './Components/014/DoubleSquare';
import ManyButtons from './Components/014/ManyButtons';
import Picture from './Components/014/Picture';
import RandNumbers from './Components/014/RandNumbers';
import Sircle from './Components/014/Sircles';
import T3 from './Components/014/T3';

function App() {


    return (
        <div className="App">

            <header className="App-header">
                <h1>Total recall</h1>
                <CbcChange />
                <RandNumbers />
                <T3 />
                <Picture />
                <ManyButtons />
                <Sircle />
                <DoubleSquare />
            </header>

        </div >
    );
}

export default App;