import React from 'react'
import Gallery from './Gallery'

const Home = ({ match }) => {
  return (
    <div>
      <div className="header-container">
        <h2 className="main-content-title">Home</h2>
      </div>
      <Gallery/>
    </div>
  );
}

export default Home;
