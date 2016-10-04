import React, { Component, PropTypes } from 'react'
import BlogContent from '../components/BlogContent'
import BlogSideBar from '../components/BlogSideBar'

import Faker from 'faker'

var style = {
  display: 'flex'
}

var data = [
  {title: 'Blue Jays Win World Series', content: Faker.lorem.paragraph()},
  {title: 'Maple Leafs Need to Get Their Act Together', content: Faker.lorem.paragraph()},
  {title: 'LHL Rocks', content: Faker.lorem.paragraphs(2)}
]

class BlogContainer extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      selectedPost: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({posts: data, isLoading: false, selectedPost: data[0]})
    }.bind(this), 2000)
  }

  handlePostChange = (event) => {
    event.preventDefault()
    var selectedPost = this.state.posts[event.target.dataset.id]
    this.setState({selectedPost})
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>
    } else {
      return (
        <div style={style}>
          <BlogContent {...this.state.selectedPost}/>
          <BlogSideBar posts={this.state.posts} onClick={this.handlePostChange}/>
        </div>
      )
    }
  }
}

export default BlogContainer
