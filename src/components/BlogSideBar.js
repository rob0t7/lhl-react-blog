import React, { PropTypes } from 'react'

/* class BlogSideBar extends React.Component {
 *   constructor(props) {
 *     super(props)
 *   }
 *   render() {
 *     return (
 *       <div>
 *       </div>
 *     )
 *   }
 * }*/

var style = {
  width: '30%',
  display: 'inline-block',
  background: 'DarkBlue',
  color: 'white'
}
var linkStyle = {
  color: 'white'
}
const BlogSideBar = (props) => {
  var clickEvent = (event) => {
    event.preventDefault()
    props.onClickPost(event.target.dataset.id)
  }

  return (
    <div style={style}>
      <h2>Recent Posts</h2>
      <ul>
        { props.posts.map( (post, i) => { return (
            <li key={i}>
              <a onClick={clickEvent} href="#" style={linkStyle} data-id={i}>{post.title}</a>
            </li>
          )} ) }
      </ul>
    </div>
  )
}

BlogSideBar.propTypes = {
  posts: PropTypes.array.isRequired
}

export default BlogSideBar
