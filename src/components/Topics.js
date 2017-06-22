import React from 'react'
import Sidebar from './Sidebar';
import { Route } from 'react-router';

const routes = [
  {
    to: "/topics/rendering",
    name: "rendering"
  },
  {
    to: "/topics/statevsprops",
    name: "state vs props"
  },
  {
    to: "/topics/hello",
    name: "hello"
  }
];

const Topic = ({ match }) => (
  <div>
    <h3 className="topic-title">{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2 className="main-content-title">Topics</h2>
    <div className="topics-content">
      <Sidebar routes={routes} match={match}/>
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3 className="topic-title">Please select a topic.</h3>
      )}/>
    </div>
  </div>
)

export default Topics;
