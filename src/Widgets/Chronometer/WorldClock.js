import React from 'react'
import './WorldClock.scss'

import { getHourHands as hourPositions,
         getHourHands as hourHand,
         seconds as secondsTicker } from './assembly/dial.js'


export default (props) => {
  console.log(secondsTicker)

  return <>
    <div className="WorldClock">
      <h3 style={{ position: 'absolute', fontSize: '1.5rem', color: 'lime' }}>UNDER CONSTRUCTION</h3>
      { secondsTicker }
      <div className="WorldClock__hour-positions--wrapper">{ hourPositions(11) }</div>
      <div className="WorldClock__hour-hand--wrapper">{ hourHand(0) }</div>
      <div className="WorldClock__minute-hand--wrapper">
        <div className="WorldClock__minute-hand--ticker"></div>
      </div>
    </div>
  </>
}
