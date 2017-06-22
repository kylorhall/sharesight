import React from 'react'
import ReactDOM from 'react-dom'
import Container from './containers'

// Mount only after HTML has been parsed
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Container />,
    document.getElementById('react-root')
  )
})
