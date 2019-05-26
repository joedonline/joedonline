import React from 'react'
import './CenterPanel.scss'

import { NavLink } from 'react-router-dom'

import { svgDev as DevLink, svgDes as DesLink } from '../../../IconLink/IconLink'
import Chronometer from '../../../Widgets/Chronometer/Chronometer'
import Weather from '../../../Widgets/Weather/Weather'


export default (props) => {

  return <>
    <div className="CenterPanel">
      <div className="CenterPanel__iconlinks">
        <div className="wrapper">
          <div className="top">
            <DevLink iconwidth={"5rem"} iconheight={"5rem"} />
            <DesLink iconwidth={"5rem"} iconheight={"5rem"} />
          </div>
          <div className="bottom">
            <NavLink to="/widgets-page">
              <Chronometer />
              <Weather modalId={props.modalId} isWidgetModalOn={props.isWidgetModalOn} />
            </NavLink>
          </div>
        </div>
      </div>
      <h1 className="CenterPanel__sitename">{`joe domingo`}</h1>
    </div>
  </>
}
