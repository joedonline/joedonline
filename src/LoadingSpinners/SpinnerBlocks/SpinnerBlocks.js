import React from 'react'
import './SpinnerBlocks.scss'

import Blocks from './Blocks/Blocks'


export default (props) => <>
  <span id="SpinnerBlocks">
    <div className="SpinnerBlocks-base"></div>
    <div className="SpinnerBlocks"><Blocks /></div>
  </span>
</>
