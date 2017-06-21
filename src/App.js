import React from 'react';
import { Route } from 'react-router';
import { FluidNavbar } from './components';

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
  <FluidNavbar/>
);

export default App;
