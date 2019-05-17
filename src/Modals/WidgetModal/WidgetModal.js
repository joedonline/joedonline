import React from 'react'
import './WidgetModal.scss'

import WorldClock from '../../Widgets/Chronometer/WorldClock'
import Weather from '../../Widgets/Weather/Weather'


export default (props) => <>
  <div id={ props.modalId } className="WidgetModal animated fadeIn">
    <h3>Time and Weather App</h3>
    <p>click anywhere to exit</p>
    <div className="WidgetModal__widgets">
      <WorldClock />
      <Weather isWidgetModalOn={props.isWidgetModalOn} />
    </div>
  </div>
</>
