import React from 'react'
import './Content.scss'


export default (props) => {
  let content = props.content ? props.content : "UNDER CONSTRUCTION..."

  return <>
    <div className={`Content animated ${props.animation}`}>
      <h2 className={`Content-heading animated ${props.animation}`}>{ props.heading }</h2>
      <div className={`contents animated ${props.animation} slow`} dangerouslySetInnerHTML={ { __html:  content } } />
    </div>
  </>
}
