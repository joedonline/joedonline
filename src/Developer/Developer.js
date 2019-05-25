import React from 'react'
import './Developer.scss'

import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'


export default (props) => {
  window.scrollTo(0, 0)

  return <>
    <Sidebar />
    <div className="Developer animated bounceInRight"><Main /></div>
  </>
}
