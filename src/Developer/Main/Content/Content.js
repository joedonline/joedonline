import React from 'react'
import './Content.scss'


export default (props) => {
  let content = props.content ? props.content : "LOADING..."
  const contentHandler = (thumbnail, title, excerpt) => <>
    <div style={{ background: `url(${thumbnail}) center/cover no-repeat` }}>
      <a href="#!">Link 1</a>
    </div>
    <h3>{ title }</h3>
    <p>{ excerpt }</p>
  </>

  return <>
    <div className={`Content animated ${props.animation}`}>
      <h2 className={`Content-heading animated ${props.animation}`}>{ props.heading }</h2>
        <div className={`contents animated ${props.animation} slow`}>
          { props.isProjects
            ? <div className="card-wrapper">
                {
                  props.content
                  ? props.content.map(content => <article key={`K-${Math.floor(Math.random() * 9999)}-`.concat(`${Math.floor(Math.random() * 9999)}-EY`)} className="card">
                        { contentHandler(content.acf.thumbnail, content.acf.title, content.acf.excerpt) }
                      </article>
                    )
                  : <h1>{"loading..."}</h1>
                }
              </div>
            : <div className={`contents animated ${props.animation} slow`} dangerouslySetInnerHTML={ { __html:  content } } />
          }
        </div>
    </div>
  </>
}
