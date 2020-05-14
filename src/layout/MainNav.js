import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/hydro-logo.jpeg";
import NavItem from "./NavItem";
import { FaRegCalendarAlt, FaRegClock, FaShoppingBasket, FaBars, FaWindowClose, FaMapSigns, FaHome } from "react-icons/fa";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { GiTicket } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
const MainNav = ({ setMenuShow }) => {
  return (
    <div>
      <div className="top-nav">
        <div className="container">
          <div className="row">
            <div className="col-3 opening">
              <h6>
                <FaRegClock size={17} /> &nbsp; Open Today: 9:00am - 6:00pm
              </h6>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <Link to="/">
                <GiTicket size={17} /> Gift Vouchers
              </Link>

              <Link to="/">Jobs</Link>

              <Link to="/">Memberships</Link>

              <Link to="/">Contact</Link>

              <Link to="/">Help & Rules</Link>
            </div>
            <div className="col-1 d-flex justify-content-between">
              <div className="top-user-icon">
                <FiUser size={18} />
              </div>
              <div className="top-basket-icon">
                <FiShoppingCart size={17} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="container">
          <Navbar sticky="top-fixed" id="navbar" className="navbar navbar-expand-lg ">
            <Container className="d-flex justify-content-start">
              <Navbar.Brand>
                <Link to="/">
                  <img height="80" width="130" src={logo} alt="Hydro" href="/" />
                </Link>
              </Navbar.Brand>
              <Nav className="navbar-nav">
                <NavItem path="/">Home</NavItem>
                <NavDropdown title="Play" id="basic-nav-dropdown">
                  <div class="container nav-play">
                    <div className="row">
                      <div className="col-1">
                        <FaMapSigns size={30} color="white" />
                      </div>
                      <div className="col-3">
                        <h3>Play</h3>
                      </div>
                      <div className="col-4">
                        <p>Action Packed Fun</p>
                      </div>
                      <div className="col-3">
                        <button type="button" class="btn btn-primary btn-sm">
                          Book Now
                        </button>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Link class="dropdown-item" href="/">
                          Aqua Park
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Hydro Climb
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Waterboard & Kneeboard
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Tubing
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Puddle Park
                        </Link>
                      </div>
                      <div class="col">
                        <Link class="dropdown-item" href="/">
                          Aqua Rugby
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Open Water Swim
                        </Link>
                        <Link class="dropdown-item" href="/">
                          BBQ Pods
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Stand Up Paddle Boarding
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Kayaking
                        </Link>
                      </div>
                      <div class="col">
                        <h4>Group Package?</h4>
                        <h4>Birthday Party?</h4>
                        <p>Fill in this enquiry form</p>
                        <button type="button" class="btn btn-primary btn-sm">
                          Enquiry Form
                        </button>
                      </div>
                    </div>
                  </div>
                </NavDropdown>

                <NavDropdown title="Stay" id="basic-nav-dropdown">
                  <div class="container nav-stay">
                    <div className="row">
                      <div className="col-1">
                        <FaHome size={30} color="white" />
                      </div>
                      <div className="col-3">
                        <h3>Stay</h3>
                      </div>
                      <div className="col-4">
                        <p>Relax & Unwind</p>
                      </div>
                      <div className="col-3">
                        <button type="button" class="btn btn-primary btn-sm">
                          Book Now
                        </button>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col">
                        <Link class="dropdown-item" href="/">
                          Glamping Pods
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Safari Lodges
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Lake Pod
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Houseboat
                        </Link>
                        <Link class="dropdown-item" href="/">
                          IgluHut
                        </Link>
                      </div>
                      <div class="col">
                        <Link class="dropdown-item" href="/">
                          Forest Domes
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Luxury Glamping Pods
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Meadow Pods
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Hedge Village Pods
                        </Link>
                        <Link class="dropdown-item" href="/">
                          Tree Garden Pods
                        </Link>
                      </div>
                      <div class="col">
                        <h4>Special Enquiry?</h4>
                        <p>Fill in this enquiry form</p>
                        <button type="button" class="btn btn-primary btn-sm">
                          Enquiry Form
                        </button>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown title="Explore" id="basic-nav-dropdown">
                  <div className="nav-explore">
                    <NavDropdown.Item href="/">Towpath</NavDropdown.Item>

                    <NavDropdown.Item href="/">Playpark</NavDropdown.Item>
                    <NavDropdown.Item href="/">Memberships</NavDropdown.Item>

                    <button type="button" class="btn btn-primary btn-sm">
                      Buy Pass
                    </button>
                  </div>
                </NavDropdown>
                <NavDropdown title="Groups" id="basic-nav-dropdown">
                  <div className="nav-groups">
                    <NavDropdown.Item href="/">Schools & Groups</NavDropdown.Item>

                    <NavDropdown.Item href="/">Team Building</NavDropdown.Item>
                    <NavDropdown.Item href="/">Birthday Parties</NavDropdown.Item>

                    <NavDropdown.Item href="/">BBQ Pods</NavDropdown.Item>
                  </div>
                </NavDropdown>
                <NavItem path="/">Events</NavItem>
                <button type="button" class="btn btn-primary btn-sm">
                  <FaRegCalendarAlt /> &nbsp; Book Now
                </button>
              </Nav>

              <div className="FaBars">
                <MobileMenu
                  render={({ on, toggle }) => (
                    <div>
                      <div>
                        {" "}
                        <FaShoppingBasket size={20} /> &nbsp;
                        <button type="button" class="btn btn-secondary btn-sm">
                          Book Now
                        </button>{" "}
                        &nbsp;
                        <icon onClick={toggle}>
                          <FaBars />
                        </icon>
                      </div>
                      {on && (
                        <div className="MobileMenu">
                          <div className="container">
                            <div className="mobile-top-nav  ">
                              <div className="row d-flex justify-content-between py-5">
                                <div>
                                  <FaShoppingBasket size={50} />
                                </div>
                                <div className="mr-5" onClick={toggle}>
                                  <FaWindowClose size={50} />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mobile-inner">
                            <ul>
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <br />
                              <li>
                                <Link to="/">Play</Link>
                              </li>
                              <br />
                              <li>
                                <Link to="/">Stay</Link>
                              </li>
                              <br />
                              <li>
                                <Link to="/">Explore</Link>
                              </li>
                              <br />
                              <li>
                                <Link to="/">Events</Link>
                              </li>
                              <br />
                              <li>
                                <Link to="/">Groups</Link>
                              </li>
                              <br />
                              <li>
                                <Link to="/">Contact</Link>
                              </li>
                              <br />
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
