import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupButton,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class FluidNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
  render() {
    return (
      <Navbar inverse color="inverse" toggleable>
        <div className={classNames('d-flex', 'nav-no-collapse-content')}>
          <NavbarBrand tag={Link} to={'/'}>H</NavbarBrand>
          <InputGroup className="search-bar">
            <Input color="inverse" placeholder="Search..." />
            <InputGroupButton className={"search-button"}> Go!</InputGroupButton>
          </InputGroup>
          <NavbarToggler onClick={this.toggle} />
        </div>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
