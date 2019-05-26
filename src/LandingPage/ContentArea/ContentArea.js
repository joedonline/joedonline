import React from 'react'
import './ContentArea.scss'

import { NavLink } from 'react-router-dom'
import CenterPanel from './CenterPanel/CenterPanel'


export default (props) => {
  return <>
    <div id="LP-ContentArea">
      <div className="content-container">
        <NavLink to="/developer" className="content-devlink">{`<developer>`}</NavLink>
      </div>
      <div className="content-container">
        <CenterPanel />
      </div>
      <div className="content-container">
        <NavLink to="/designer" className="content-deslink">{`DESIGNER`}</NavLink>
      </div>
    </div>
  </>
}
