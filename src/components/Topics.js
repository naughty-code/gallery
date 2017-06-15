import { Sidebar } from './Sidebar';
import { Router } from 'react-router';

const Topic = ({ match }) => (
  <div>
    <h3 className="topic-title">{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2 className="main-content-title">Topics</h2>
    <div className="topics-content">
      <Sidebar match={match}/>
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3 className="topic-title">Please select a topic.</h3>
      )}/>
    </div>
  </div>
)

export default Topics;
