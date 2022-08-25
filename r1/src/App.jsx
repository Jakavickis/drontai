import './App.css';
import Cat from './Components/004/Cat';

const cats = [
    { id: 1, weight: 5, name: 'Murka' },
    { id: 2, weight: 8, name: 'Pilkis' },
    { id: 3, weight: 2, name: 'Pūkis' },
    { id: 4, weight: 3, name: 'Rainis' },
    { id: 5, weight: 5, name: 'Brisius' }
];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Lists</h1>
                <div className="container">
                    {
                        // cats.map(cat => <li key={cat.id}>{cat.name}</li>)
                        [...cats].sort((a, b) => a.name.localeCompare(b.name))
                            .map(cat => <Cat key={cat.id} cat={cat} />)
                    }
                </div>
                {/* <div className="container">
                    <Cat catName="Pilkis" weight="20" />
                    <Cat catName="Juodis" weight="5" />
                    <Cat catName="Rainis" weight="21" />
                </div> */}
            </header>
        </div>
    );
}

export default App;
