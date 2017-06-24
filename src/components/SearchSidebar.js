import React from 'react'
import Sidebar from './Sidebar'

const SearchSidebar = ({ routes }) => (
  <nav className="search-sidebar">
    <div className="search-sidebar__search-bar">
      <input type="text" placeholder="Search..."/>
    </div>
    <Sidebar routes={ routes }/>
  </nav>
)

export default SearchSidebar
