import React from 'react'
import './Blocks.scss'


export default () => <div className="Blocks"></div>

// export default () => {
//
//   const svgStyles = {
//     shapeRendering: 'auto',
//     animationPlayState: 'running',
//     animationDelay: '0s',
//     background: `rgba(0, 0, 0, 0) none repeat scroll 0% 0%`,
//     width: '200px',
//     height: '200px'
//   }
//
//   const animationStyles = {
//     animationPlayState: 'running',
//     animationDelay: '0s',
//   }
//
//   const attributeName = "fill"
//   const values = "#376888;#8cd0e5;#8cd0e5"
//   const block = { size: "20" }
//   const keyTimes = "0;0.125;1"
//   const fill = "#8cd0e5"
//   const repeatCount = "indefinite"
//   const calcMode = "discrete"
//
//   return <>
//     <svg className="lds-blocks" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={ svgStyles }>
//     <rect x="19" y="19" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect><rect x="40" y="19" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0.125s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect><rect x="61" y="19" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0.25s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect><rect x="19" y="40" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0.875s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect><rect x="61" y="40" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0.375s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect><rect x="19" y="61" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0.75s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect><rect x="40" y="61" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0.625s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect><rect x="61" y="61" width={ block.size } height={ block.size } fill={ fill } style={ animationStyles }>
//       <animate attributeName={ attributeName } values={ values } keyTimes={ keyTimes } dur="1s" repeatCount={ repeatCount } begin="0.5s" calcMode={ calcMode } style={ animationStyles }></animate>
//     </rect></svg>
//   </> // END svg
//
// } // END Blocks
