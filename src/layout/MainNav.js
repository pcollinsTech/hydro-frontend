import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/hydro-logo.jpeg";
import NavItem from "./NavItem";
import { FaRegCalendarAlt } from "react-icons/fa";

class NavBar extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="container">
          <Navbar sticky="top-fixed" id="navbar" className="navbar navbar-expand-lg ">
            <Container className="d-flex justify-content-between">
              <Navbar.Brand>
                <Link to="/">
                  <img src={logo} alt="Hydro" href="/" />
                </Link>
              </Navbar.Brand>

              <Nav className="navbar-nav">
                <NavItem path="/">Home</NavItem>
                <NavDropdown title="Play" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Play1</NavDropdown.Item>

                  <NavDropdown.Item href="/">Play2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Stay" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Stay1</NavDropdown.Item>

                  <NavDropdown.Item href="/">Stay2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Explore" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Explore1</NavDropdown.Item>

                  <NavDropdown.Item href="/">Explore2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Groups" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Groups1</NavDropdown.Item>

                  <NavDropdown.Item href="/">Groups2</NavDropdown.Item>
                </NavDropdown>
                <NavItem path="/">Events</NavItem>
              </Nav>
              <button type="button" class="btn btn-primary btn-sm">
                <FaRegCalendarAlt /> Book Now
              </button>
            </Container>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default NavBar;
