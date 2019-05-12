import React from 'react'
import './DigitalTime.scss'


export default (props) => <i className="DigitalTime" style={{ color: 'white' }}>
  <span>{ `SUN` }</span>
  <span className="DigitalTime-now">{ `12:00` }</span>
  <span>{ `AM` }</span>
</i>
