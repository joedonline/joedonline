import React from 'react'
import './Icons.scss'

import * as Icons from '../../../IconLink/IconLink'
import Chronometer from '../../../WidgetsSVG/Chronometer/Chronometer'

export default (props) => <>
  <ul className="Icons">
    <li><Icons.svgDev iconwidth="5rem" iconheight="5rem" /></li>
    <li><Icons.svgDes iconwidth="5rem" iconheight="5rem" /></li>
    <li title="soon to be a modal on click">
      <Chronometer dialFill="rgba(56,105,126,0.02)" hourFill="#fcfeff" secondsBorder="#fcfeff" />
    </li>
  </ul>
</>
