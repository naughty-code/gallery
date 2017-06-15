import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Home, About, Topics, Navbar } from './components';
import { Route } from 'react-router';



const App = () => (
    <div>
      <Navbar/>
      <article className="main-content">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </article>
    </div>
)
export default App;
