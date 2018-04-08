import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar
          color="faded"
          light expand="md"
          className="navbar-light bg-light"
        >
          <NavbarBrand
            tag={Link}
            to="/"
          >
            {this.props.title}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav
              className="ml-auto"
              navbar
            >
              <NavItem>
                <Button
                  tag={Link}
                  to="/posts/new"
                  color="primary"
                >
                  New Post
                </Button>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/categories"
                >
                  Categories
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/peimelo/readable">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header
