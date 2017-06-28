import React from 'react';
import { Route } from 'react-router';
import { FluidNavbar } from './components';
import ReduxInfiniteScroll from 'redux-infinite-scroll';
import { connect } from 'react-redux';
import { getItems, getIsFetching } from './reducers';
import { fetchItems } from './actions'

const Gallery = ({items, fetchItems, getIsFetching}) => (
  <div>
    <FluidNavbar/>
    <ReduxInfiniteScroll
        elementIsScrollable={false}
        loadMore={fetchItems}
        isLoading={getIsFetching}
    >
      {items.map(item => <div><img alt={item.alt}></img></div>)}
    </ReduxInfiniteScroll>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  items: getItems(state),
  isLoading: getIsFetching(state)
});

const App = connect(mapStateToProps, {fetchItems})(Gallery);

export default App;
