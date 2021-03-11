import React, { useState } from 'react'
import './global.css'

function App() {
  const [states, setStates] = useState('ENTRY')
  const [hunch, setHunch] = useState(250)
  const [numHunch, setNumHunch] = useState(1)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(500)

  const initialGame = () => {
    setStates('RUNNING')
    setMin(0)
    setMax(500)
    setNumHunch(1)
    setHunch(250)
  }
  if(states === 'ENTRY') {
    return <button onClick={initialGame}>Start</button>
  }

  const smaller = () => {
    setNumHunch(setHunch + 1)
    setMax(hunch) 
    const nextHunch = parseInt((hunch - min) / 2) + min
    setHunch(nextHunch)
  }

  const larger = () => {
    setNumHunch(setHunch + 1)
    setMin(hunch)
    const nextHunch = parseInt((max - hunch) / 2) + hunch
    setHunch(nextHunch)
  }

  const gotItRight = () => {
    setStates('END')
  }
  if (states === 'END') {
    return (
      <div>
        <p>Acertei o Número {hunch} com {numHunch} chutes!</p>
        <button onClick={initialGame}>RESTART</button>
      </div>
    )
  }

  return (
    <div className="container">
      <p>O seu número é {hunch}?</p>
      <button onClick={smaller}>Menor!</button>
      <button onClick={gotItRight}>Acertou!</button>
      <button onClick={larger}>Maior!</button>
    </div>
  );
}

export default App;
