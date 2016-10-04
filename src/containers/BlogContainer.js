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
  constructor() {
    super()
    this.state = {
      posts: [],
      selectedPost: 0,
      isLoading: true
    }
    this.handleBlogChange = this.handleBlogChange.bind(this)
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({posts: data, isLoading: false, selectedPost: 0})
    }.bind(this), 2000)
  }

  handleBlogChange(index) {
    this.setState({selectedPost: index})
  }
  render() {
    return (
      <div style={style.general}>
        <div>
          { this.state.isLoading ?
            <div>Loading...</div> : <BlogContent post={this.state.posts[this.state.selectedPost]}/> }
        </div>

        <BlogSideBar posts={this.state.posts} onClickPost={this.handleBlogChange}/>
      </div>
    )
  }
}

export default BlogContainer
