import React from 'react';
import ActLink from './ActLink';


const Sidebar = ({ routes }) => {
  const props = {
    className: 'nav-link'
  };
  return (
    <nav>
        <ul className="sidebar">
          {routes.map(({to, name}) =>
            <li>
              <ActLink
                {...props}
                to={to}>
                { name }
              </ActLink>
            </li>
          )}
        </ul>
    </nav>
  );
}

export default Sidebar;
