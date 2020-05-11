import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket, FaBars } from "react-icons/fa";
import logo from "../assets/images/hydro-logo.jpeg";

export default function MobileMenu({ onMenuToggle = () => {} }) {
  return (
    <div className="MobileMenu">
      <nav className="navbar navbar-dark bg-primary">
        {" "}
        <div className="container-fluid">
          {" "}
          <Link className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </Link>{" "}
          <button>
            <FaShoppingBasket />
          </button>
          <button className="navbar-toggler hidden-md-up pull-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
            <FaBars />
          </button>{" "}
          <div className="collapse navbar-toggleable-sm" id="collapsingNavbar2">
            {" "}
            <ul>
              <li className="special">
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    onMenuToggle();
                  }}
                  className="menuToggle"
                >
                  <span>Menu</span>
                </a>
                <div id="menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                      <Link to="/Services">Services</Link>
                    </li>
                    <li>
                      <Link to="/HealthSafety">Health & Safety</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact Us</Link>
                    </li>
                  </ul>
                  <a
                    className="close"
                    onClick={(e) => {
                      e.preventDefault();
                      onMenuToggle();
                    }}
                    href="#menu"
                  >
                    {""}
                  </a>
                </div>
              </li>
            </ul>
          </div>{" "}
        </div>{" "}
      </nav>
    </div>
  );
}
