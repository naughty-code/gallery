import React from 'react'
import ActLink from './ActLink'
import { capitalize } from 'lodash'

const Navbar = ({ routes }) => (
  <nav className="navbar">
    <div className="nav-links">
      { routes.map(({ to, name, exact }) =>
          <ActLink className="nav-link" exact={exact} to={to}>
            { name }
          </ActLink>
        )
      }
    </div>
  </nav>
)

export default Navbar;
