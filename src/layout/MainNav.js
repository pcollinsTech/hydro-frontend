import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/hydro-logo.jpeg";
import NavItem from "./NavItem";
import { FaRegCalendarAlt, FaTicketAlt, FaRegClock } from "react-icons/fa";

const MainNav = () => {
  return (
    <div className="top-nav">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h6>
              <FaRegClock /> &nbsp; Open Today: 9:00am - 6:00pm
            </h6>
          </div>
          <div className="col-8 d-flex justify-content-between">
            <Link to="/">
              <FaTicketAlt rotate={90} /> &nbsp; Gift Vouchers
            </Link>

            <Link to="/">Jobs</Link>

            <Link to="/">Memberships</Link>

            <Link to="/">Contact</Link>

            <Link to="/">Help & Rules</Link>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container">
          <Navbar sticky="top-fixed" id="navbar" className="navbar navbar-expand-lg ">
            <Container className="d-flex justify-content-between">
              <Navbar.Brand>
                <Link to="/">
                  <img height="70" width="110" src={logo} alt="Hydro" href="/" />
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
                <FaRegCalendarAlt /> &nbsp; Book Now
              </button>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
