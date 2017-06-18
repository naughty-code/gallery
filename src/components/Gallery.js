import React, { Component } from 'react'
import Page from './GalleryPage'
import InfiniteScroll from 'redux-infinite-scroll'
import { connect } from 'react-redux'
import { fetchPage } from '../actions'
import { getPages, getIsFetching } from '../reducers'
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
  pages: getPages(state),
  isFetching: getIsFetching(state)
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   fetchItem
// })

const Gallery = ({ pages, isFetching, fetchPage}) => (
      <InfiniteScroll
        elementIsScrollable={false}
        loadingMore={isFetching}
        loadMore={fetchPage}>
        {
          pages.map((page, i) =>
          <Page key={i} items={page.items}/>
          )
        }
      </InfiniteScroll>
  )

const ScrollGallery = withRouter(connect(
  mapStateToProps,
  { fetchPage })(Gallery));

export default ScrollGallery
