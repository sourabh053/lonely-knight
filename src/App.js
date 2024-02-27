import { useState } from 'react';
import './App.css';
import Board from './components/Board';
// import Knight from './components/Knight';
// import Square from './components/Square';

function App() {
  const[ knightPosition,setKnightPosition] = useState([1,0]);
  return (
    <div className="App">
      <Board knightPosition={knightPosition} setKnightPosition= {setKnightPosition} />
    </div>
  );
}

export default App;
