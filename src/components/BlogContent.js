import React, { PropTypes } from 'react'

var style = {
  width: '70%',
  padding: '1rem'
}

const BlogContent = (props) => {
  return (
    <div style={style}>
      <article>
        <h1>{props.title}</h1>
        {props.content}
      </article>
    </div>
  )
}

BlogContent.propTypes = {
  title:   PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default BlogContent
