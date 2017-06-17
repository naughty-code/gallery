import React from 'react';
import ActLink from './ActLink';


const Sidebar = ({ match, routes }) => {
  const props = {
    className: 'nav-link'
  };
  console.log(match);
  return (
    <nav>
        <ul className="sidebar">
          {routes.map(route =>
            <li>
              <ActLink
                to={`${match.url === '/' ? '' : match.url}/${route}`}
                {...props}>
                { route }
              </ActLink>
            </li>
          )}
        </ul>
    </nav>
  );
}

export default Sidebar;
