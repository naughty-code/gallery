import React from 'react';
import { Home, About, Topics, Navbar } from './components';
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
