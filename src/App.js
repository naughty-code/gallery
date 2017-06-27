import React from 'react';
import { Route } from 'react-router';
import { FluidNavbar } from './components';
import ReduxInfiniteScroll from 'redux-infinite-scroll';

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
    <FluidNavbar/>
    <ReduxInfiniteScroll>
    </ReduxInfiniteScroll>
  </div>
);

export default App;
