import React from 'react'
import './Content.scss'


export default (props) => {
  let content = props.content ? props.content : "PAGE UNDER CONSTRUCTION..."

  return <>
    <div className="Content">
      <h2 className="Content-heading">{ props.heading }</h2>
      <div className="contents" dangerouslySetInnerHTML={ { __html:  content } } />
    </div>
  </>
}
