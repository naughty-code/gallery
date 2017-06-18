import React from 'react'
import Gallery from './Gallery'

const Home = ({ match }) => {
  return (
    <div>
      <div className="header-container">
        <h2 className="main-content-title">Home</h2>
      </div>
      <div className="main-content-columns">
        <div className="search-sidebar">
          <div className="seach-bar-container">
              <input type="text" placeholder="Search..."/>
          </div>
          <div className="search-sidebar-tags">
          </div>
        </div>
        <div className="gallery-content">
          <Gallery/>
        </div>
      </div>
    </div>
  );
}

export default Home;
