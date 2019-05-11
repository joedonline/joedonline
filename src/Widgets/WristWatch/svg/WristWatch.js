import React from 'react'


export default (props) => {
  const fill = {
    fill: props.fillColor
  }

  const styles = {
    enableBackground: `new 0 0 162 161.9`
  }

  return <>
    <?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" id="wrist_watch" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    	 y="0px" viewBox="0 0 162 161.9" style={ styles } xml:space="preserve">
    <style type="text/css">
    	.st0{opacity:0;}
    	.st1{fill:#FF0000;}
    	.st2{fill:#FFFF00;}
    </style>
    <g className="st0">
    	<circle cx="81" cy="81" r="81"/>
    </g>
    <g>
    	<path className="st1" d="M81,1c6,0,10.9,4.9,10.9,10.9S87,22.8,81,22.8s-10.9-4.9-10.9-10.9S75,1,81,1 M81,0c-6.6,0-11.9,5.3-11.9,11.9
    		S74.4,23.8,81,23.8s11.9-5.3,11.9-11.9S87.6,0,81,0L81,0z"/>
    </g>
    <circle className="st2" cx="81" cy="11.9" r="7.4"/>
    </svg>
  </>
} // END WristWatch js
