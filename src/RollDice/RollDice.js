import React, { useState } from 'react'
import Die from '../Die/Die'
import './RollDice.css'


function RollDice(props) {
  const [sides] = useState(['one', 'two', 'three', 'four', 'five', 'six'])
  const [state, setState] = useState({ die1: 'one', die2: 'one', rolling: false })


  function roll() {
    const randomIndex1 = Math.floor(Math.random() * sides.length)
    const randomIndex2 = Math.floor(Math.random() * sides.length)

    const randomDie1 = sides[randomIndex1]
    const randomDie2 = sides[randomIndex2]

    console.log(randomIndex1, randomIndex2)

    setState({ die1: randomDie1, die2: randomDie2, rolling: true })

    setTimeout(() => {
      setState({die1: randomDie1, die2: randomDie2, rolling: false})
    }, 1000);
  }



  return <>
    <div className="container">
      <div className="dices">
        <Die face={state.die1} shaking={state.rolling}/>
        <Die face={state.die2} shaking={state.rolling}/>
      </div>
      <div>
        <button className="clickBtn" onClick={roll} disabled={state.rolling}>{
          state.rolling ? 'Rolling...' : 'Roll the Dices!'
        }</button>
      </div>
    </div>
  </>
}



export default RollDice