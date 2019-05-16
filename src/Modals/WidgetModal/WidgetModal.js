import React from 'react'
import './WidgetModal.scss'

import Chronometer from '../../Widgets/Chronometer/Chronometer'
import Weather from '../../Widgets/Weather/Weather'


export default (props) => <>
  <div id={ props.modalId } className="WidgetModal animated fadeIn">
    <h3>Time and Weather App</h3>
    <p>click anywhere to exit</p>
    <Chronometer />
    <Weather />
  </div>
</>
