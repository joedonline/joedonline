import React from 'react'
import './Developer.scss'

import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'


export default (props) => {
  return <div className="Developer animated bounceInRight">
           <Sidebar />
           <Main />
         </div>
}
