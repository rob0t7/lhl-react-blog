import React, { PropTypes } from 'react'

const BlogSideBar = (props) => {
  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        { props.posts.map( (post, i) => { return (
            <li key={i}>
              <a onClick={props.onClick} data-id={i} href="#">{post.title}</a>
            </li>
          )} ) }
      </ul>
    </div>
  )
}

BlogSideBar.propTypes = {
  posts:   PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string.isRequired})),
  onClick: PropTypes.func.isRequired
}

export default BlogSideBar
