import React from 'react'
import './Developer.scss'

import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'


export default (props) => <>
  <Sidebar />
  <div className="Developer animated fadeInDown"><Main /></div>
</>
