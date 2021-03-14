import React from 'react'
import Header from './components/header'
import Aside from './components/aside'
import Posts from './components/posts'

import './App.css';

const App = () => {
  return (
    <div className= "app">
      <Header /> 
      <div className="container">
        < Aside />
        <Posts />
      </div>
    </div>
  );
}

export default App;
