import React, { Component } from 'react'
import Infinite from 'react-infinite'
import { connect } from 'react-redux'
import { fetchPage } from '../actions'
import { getItems } from '../reducers/gallery'
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => ({
  items: getItems(state)
})

// class Gallery extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       isLoading: false,
//     };
//   }
//
//   loadMore = () => {
//     this.setState({isLoading: true});
//     this.props.fetchPage();
//     this.setState({isLoading: false});
//   }
//
//   render = () => {
//     return (
//       <InfiniteScroll loadingMore={this.state.isLoading} loadMore={this.loadMore}>
//         {this.props.items.map((item, index) => <div key={index}>{item}</div>)}
//       </InfiniteScroll>
//     );
//   }
// }

const Gallery = ({ items, fetchPage }) => (
  <Infinite elementHeight={50} useWindowAsScrollContainer>
    {items.map((item, index) => <div key={index} style={height: "50px"}>{item}</div>)}
  </Infinite>
)

const ScrollGallery = withRouter(connect(
  mapStateToProps,
  { fetchPage })(Gallery));

export default ScrollGallery
