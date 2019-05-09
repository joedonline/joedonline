import React from 'react'
import "./Splash.scss"

import SiteName from './SiteName'
import Dev from './Dev'
import Des from './Des'


export default (props) => {
   return <div className="Splash animated slideInDown">
            <Dev />
            <Des />
            <SiteName />
          </div>
}
