import React from 'react';
import { Home, About, Topics, Navbar } from './components';
import { Route } from 'react-router';

//routes to make nav bar buttons
const routes = [
  {
    to: "/",
    name: "Home",
    exact: true
  },
  {
    to: "/about",
    name: "About"
  },
  {
    to: "/topics",
    name: "Topics"
  }
];

const App = () => (
    <div>
      <Navbar routes={routes}/>
      <div className="main-content">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </div>
)
export default App;
