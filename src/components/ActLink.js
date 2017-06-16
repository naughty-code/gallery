import React from 'react'
import { NavLink } from 'react-router-dom'

const ActLink = ({className, exact, to, children}) => (
        <NavLink
          className={className}
          exact = {false || exact}
          activeClassName="active"
          to={to}> {children}
        </NavLink>
)

export default ActLink;
