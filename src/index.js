import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <>
      <h4>this is gyan, welcome home</h4>
    </>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
