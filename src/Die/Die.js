import React from 'react'
import './Die.css'

function Die(props) {
  return <div className="Die">
    <i className={`dice fas fa-dice-${props.face} ${props.shaking ? 'shaking' : ''}`}></i>
  </div>
}

export default Die