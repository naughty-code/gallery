import React from 'react';
import ActLink from './ActLink';

const Sidebar = ({match}) => {
  const props = {
    className: 'nav-link'
  };
  return (
    <nav>
        <ul className="sidebar">
          <li>
            <ActLink
              to={`${match.url}/rendering`}
              {...props}>
              Rendering
            </ActLink>
          </li>
          <li>
            <ActLink
              to={`${match.url}/components`}
              {...props}>
              Components
            </ActLink>
          </li>
          <li>
            <ActLink
              to={`${match.url}/props-v-state`}
              {...props}>
              Props v. State
            </ActLink>
          </li>
        </ul>
    </nav>
  );
}

export default Sidebar;
