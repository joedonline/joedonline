import React from 'react'
import './Page.scss'

import Navigation from '../Navigation/Navigation'
import Content from '../Content/Content'


export default (props) => <>
  <div className="Page">
    <Navigation pagename={props.pagename} navto_left={props.navto_left} navto_right={props.navto_right} heading={props.heading} />
    <Content animation={props.animation} heading={props.heading} />
  </div>
</>
