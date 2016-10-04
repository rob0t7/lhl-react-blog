import React, { Component, PropTypes } from 'react'
import BlogContent from '../components/BlogContent'
import BlogSideBar from '../components/BlogSideBar'

import Faker from 'faker'

var style = {
  general: {
    padding: '1rem',
    display: 'flex'
  }
}

var data = [
  {title: 'Blue Jays Win World Series', content: Faker.lorem.paragraph()},
  {title: 'Maple Leafs Need to Get Their Act Together', content: Faker.lorem.paragraph()}
]

class BlogContainer extends Component {
  render() {
    return (
      <div style={style.general}>
        <div>
          <BlogContent post={data[0]} style={style.content}/>
        </div>

        <BlogSideBar posts={data} style={style.sidebar}/>
      </div>
    )
  }
}

export default BlogContainer
