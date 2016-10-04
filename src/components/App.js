import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ToolBar from './ToolBar'
import BlogContainer from '../containers/BlogContainer'

class App extends Component {
  render() {
    return (
      <div>
        <ToolBar title="LHL Blog"/>
        <BlogContainer/>
      </div>
    );
  }
}

export default App;
