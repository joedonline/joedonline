import React from 'react'
import { NavLink } from 'react-router-dom'

import IconDev from './svg/icon-svg__dev'
import IconDes from './svg/icon-svg__des'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const svgDev = props => <>
  <NavLink to="/developer" className={ props.classname } style={ styles } rel="nofollow">
    <IconDev fillColor="#f2f2f2" iconwidth={ props.iconwidth } iconheight={ props.iconheight } />
  </NavLink>
</>

export const svgDes = props => <>
  <NavLink to="/designer" className={ props.classname } style={ styles } rel="nofollow">
    <IconDes fillColor="#f2f2f2" iconwidth={ props.iconwidth } iconheight={ props.iconheight } borderColor="gray" borderColor2="eee" />
  </NavLink>
</>
