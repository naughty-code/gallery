import React, { Component } from 'react'
import InfiniteScroll from 'redux-infinite-scroll'
import { connect } from 'react-redux'
import { fetchPage } from '../actions'
import { getPages, getIsFetching } from '../reducers'
import { withRouter } from 'react-router'
import { GalleryPage, SearchSidebar } from '../components'

const mapStateToProps = (state, ownProps) => ({
  pages: getPages(state),
  isFetching: getIsFetching(state)
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   fetchItem
// })

//test routes
const routes = [
  {
    to: "/tags",
    name: "Tags"
  },
  {
    to: "/foo",
    name: "Foo"
  },
  {
    to: "/bar",
    name: "Bar"
  }
]

const Gallery = ({ pages, isFetching, fetchPage}) => (
  <div className="main-content-columns">
    <SearchSidebar routes={routes}/>
    <div className="gallery-content">
      <InfiniteScroll
        elementIsScrollable={false}
        loadingMore={isFetching}
        loadMore={fetchPage}>
        {
          pages.map((page, i) =>
          <GalleryPage
            key={i}
            items={page.items}
            rowNumber={6}
          />
          )
        }
      </InfiniteScroll>
    </div>
  </div>

  )

const ScrollGallery = withRouter(connect(
  mapStateToProps,
  { fetchPage })(Gallery));

export default ScrollGallery
