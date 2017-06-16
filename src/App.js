import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import Navbar from './components/Navbar';
import { Route } from 'react-router';



const App = () => (
    <div>
      <Navbar/>
      <div className="main-content">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </div>
)
export default App;
