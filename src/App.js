import React from 'react';
import { Route, withRouter } from 'react-router';
import ReduxInfiniteScroll from 'redux-infinite-scroll';
import { connect } from 'react-redux';
import { FluidFixedNavbar, Page } from './components';
import { getPages, getIsFetching } from './reducers';
import { fetchPage } from './actions';

const Gallery = ({pages, fetchPage, getIsFetching}) => (
  <div>
    <FluidFixedNavbar/>
    <ReduxInfiniteScroll
        className="gallery-pages-container"
        elementIsScrollable={false}
        loadMore={fetchPage}
        isLoading={getIsFetching}
    >
      {pages.map(page => <Page items={page.items}/>)}
    </ReduxInfiniteScroll>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  pages: getPages(state),
  isLoading: getIsFetching(state)
});

const App = withRouter(connect(mapStateToProps, {fetchPage})(Gallery));

export default App;
