import React from 'react'
import './SidebarContent.scss'


export default (props) => {
  let content = props.content ? props.content : "loading..."

  return <>
    <article className="SidebarContent">
      <h3 className="content-heading"> { props.contentHeading }</h3>
      <div className="contents" dangerouslySetInnerHTML={ { __html:  content } } />
    </article>
  </>
}
