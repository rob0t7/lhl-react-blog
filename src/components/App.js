import React, { Component } from 'react';
import BlogContainer from '../containers/BlogContainer'
import ToolBar from './ToolBar'

const App = (props) => {
  return (
    <div>
      <ToolBar title="LHL Blog"/>
      <BlogContainer/>
    </div>
  )
}

export default App;
