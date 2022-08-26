import './App.scss';

function App() {
    const doJob = () => {
        console.log('do job')
    }

    const clicked = () => {
        console.log('Hellow world');
        doJob();
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>STATE</h1>
                <button onClick={() => clicked()}>click!</button>
            </header>
        </div>
    );
}

export default App;
