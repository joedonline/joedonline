import React from 'react'
import './WorldClock.scss'

import { getHourHands as hourPositions } from './assembly/dial.js'


export default (props) => <>
  <div className="WorldClock">
    <h3 style={{ position: 'absolute', fontSize: '2rem', color: 'lime' }}>COMING SOON</h3>
    <div className="WorldClock__hour-positions--wrapper">{ hourPositions(11) }</div>
  </div>
</>
