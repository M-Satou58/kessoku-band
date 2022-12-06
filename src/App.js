import { useState } from 'react'
import './App.css';

import Container from './Components/Container'
import Characters from './Characters'

function App() {
  const [chr, setChr] = useState(Characters.bocchi)
  const song = new Audio(chr.song)
  return (
    <div className="App">
     <Container chr={chr} setChr={setChr} song={song}/> 
    </div>
  );
}

export default App;
