import React from 'react'
import './SiteName.scss'


export default (props) => {

  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return <section style={styles}>
           <h1>{ `joe domingo` }</h1>
           <div className="solid-bg">&nbsp;</div>
           <div className="border-outside">
             <div className="border-inside"></div>
           </div>
         </section>
}
