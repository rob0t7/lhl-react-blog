import React, { PropTypes } from 'react'

var style = {
  width: '70%',
  display: 'inline-block'
}

const BlogContent = (props) => {
  return (
    <div style={style}>
      <article>
        <h1>{props.post.title}</h1>
        {props.post.content}
      </article>
    </div>
  )
}
BlogContent.propTypes = {
  post: PropTypes.object.isRequired
}

export default BlogContent
