import React from 'react'
import Sidebar from './Sidebar'

const SearchSidebar = ({ routes }) => (
  <div className="search-sidebar">
    <div className="search-bar-container">
      <input type="text" placeholder="Search..."/>
    </div>
    <Sidebar routes={ routes }/>
  </div>
)

export default SearchSidebar
