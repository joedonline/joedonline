import React from 'react'
import { NavLink } from 'react-router-dom'

import IconDev from './svg/icon-svg__dev'
import IconDes from './svg/icon-svg__des'


export const svgDev = props => <>
  <NavLink to="/developer" className={ props.classname }>
    <IconDev fillColor="#f2f2f2" />
  </NavLink>
</>

export const svgDes = props => <>
  <NavLink to="/developer" className={ props.classname }>
    <IconDes fillColor="#f2f2f2" borderColor="gray" borderColor2="eee" />
  </NavLink>
</>
