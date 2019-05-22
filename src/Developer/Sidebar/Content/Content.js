import React from 'react'


export default (props) => {
  let content = props.content ? props.content : "loading..."

  return <>
    <div className="Sidebar__content-area-content">
      <h3 className="content-heading"> { props.contentHeading }</h3>
      <div className="contents" dangerouslySetInnerHTML={ { __html:  content } } />
    </div>
  </>
}
