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
  Button,
  Form
} from 'reactstrap';
import { Link } from 'react-router-dom';


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
      <div>
        <Navbar inverse color="inverse" toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={Link} to={'/'}>Home</NavbarBrand>
          <InputGroup>
            <Input color="inverse" placeholder="Search..." />
            <InputGroupButton> <Button color="secondary">Go!</Button></InputGroupButton>
          </InputGroup>
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
      </div>
    );
  }
}
