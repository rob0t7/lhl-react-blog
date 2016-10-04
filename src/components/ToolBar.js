import React, { PropTypes } from 'react'

var style = {
  general: {
    background: 'DarkBlue',
    padding: '1rem'
  },
  title: {
    color: 'white',
    fontSize: '2rem'
  }
}
const ToolBar = (props) => {
  return (
    <div style={style.general}>
      <nav>
        <div style={style.title}>{props.title}</div>
      </nav>
    </div>
  )
}

ToolBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default ToolBar
