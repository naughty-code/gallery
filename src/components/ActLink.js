import React from 'react'
import { NavLink } from 'react-router-dom'

const ActLink = ({className, exact, to, children, activeClassName}) => (
        <NavLink
          className={ className }
          exact = {exact}
          activeClassName={ activeClassName || "active" }
          to={to}>
          {children}
        </NavLink>
)

export default ActLink;
