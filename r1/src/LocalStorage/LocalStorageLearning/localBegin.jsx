// import { useEffect } from 'react';
// import { useState } from 'react';
// import './App.scss';



// function App() {

//     const [counts, setCounts] = useState(null);

//     useEffect(() => {

//         let data = localStorage.getItem('counts_key')
//         if (null === data) {
//             setCounts({ one: 0, two: 0 });
//         } else {
//             setCounts(JSON.parse(data))
//         }

//     }, [])

//     useEffect(() => {
//         if (null === counts) {
//             return;
//         }
//         localStorage.setItem('counts_key', JSON.stringify(counts))

//     }, [counts])

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h2>local storage</h2>
//                 <h2>ONE: {counts?.one}</h2>
//                 <h2>Two: {counts?.two}</h2>
//                 <button onClick={() => setCounts(c => ({ ...c, one: c.one + 1 }))}>one +</button>
//                 <button onClick={() => setCounts(c => ({ ...c, two: c.two + 1 }))}>two +</button>
//                 <button onClick={() => setCounts(c => ({ ...c, one: c.one - 1 }))}>one +</button>
//                 <button onClick={() => setCounts(c => ({ ...c, two: c.two - 1 }))}>two +</button>
//             </header>
//         </div >
//     );
// }

// export default App;