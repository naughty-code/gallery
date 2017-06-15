
const ActLink = ({className, exact, to, children}) => (
        <NavLink
          className={className}
          exact = {false || exact}
          activeClassName="active"
          to={to}> {children}
        </NavLink>
)

export default ActLink;
