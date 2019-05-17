import React from 'react'
import './Icons.scss'

import * as Icons from '../../../IconLink/IconLink'
import Chronometer from '../../../Widgets/Chronometer/Chronometer'
import Weather from '../../../Widgets/Weather/Weather'


export default (props) => <>
  <ul className="Icons">
    <li><Icons.svgDev iconwidth="5rem" iconheight="5rem" /></li>
    <li><Icons.svgDes iconwidth="5rem" iconheight="5rem" /></li>
    <li title="click me">
      <div>
        <Chronometer />
        <Weather />
      </div>
    </li>
  </ul>
</>
