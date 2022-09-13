import './App.scss';
import Count from './Components/016/Count';

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <h2 style={{
                    borderStyle: 'solid',
                    border: 5 + 'px',
                    borderColor: 'green'

                }}>UseReducer</h2>
                <Count />
            </header>
        </div >
    );
}

export default App;