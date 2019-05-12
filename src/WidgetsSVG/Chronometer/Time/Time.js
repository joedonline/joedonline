import React from 'react'
import './Time.scss'


export default (props) => <i className="Time" style={{ color: 'white' }}>
  <span>{ `SUN` }</span>
  <span className="Time-now">{ `12:00` }</span>
  <span>{ `AM` }</span>
</i>
