import { ActLink } from './ActLink'

const Sidebar = ({match}) => {
  const props = {
    match,
    className: classNames('nav-link')
  };
  return (
    <nav>
        <ul className="sidebar">
          <li>
            <NavLink
              to={`${match.url}/rendering`}
              {...props}>
              Rendering
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/components`}
              {...props}>
              Components
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/props-v-state`}
              {...props}>
              Props v. State
            </NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default Sidebar;
