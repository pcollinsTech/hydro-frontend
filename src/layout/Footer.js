import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import LogoBlue from "../assets/images/hydro-logo-blue.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img className="center" src={LogoBlue} alt="welcome1" />
            </div>
            <div className="col-sm-4">
              <h4>
                <b>JOIN THE FUN</b>
              </h4>
              <p>
                <FaFacebookSquare size={25} /> <FaInstagram size={25} /> <FaYoutube size={25} />
              </p>
            </div>

            {/*

               *** Use the Subscribe Component here***

          */}

            <div className="col-sm-4">
              <h4>
                <b>SIGN-UP FOR NEWSLETTER</b>
              </h4>

              <div className="col">
                <input type="email" name="email" id="email" defaultValue="" placeholder="hello@letsgohydro.com" />
                <button type="button" class="btn btn-primary btn-sm">
                  Send
                </button>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <h4>Contact Us</h4>
                  <ul>
                    <li>
                      <a href="maileto:info@letsgohydro.com" target="__blank">
                        <span>E - </span>info@letsgohydro.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:02895 920221">
                        <span>A - </span>02895 920221
                      </a>
                    </li>
                  </ul>

                  <br />
                  <h6>
                    Lets Go Hydro Limited
                    <br />
                    Mealough Road
                    <br />
                    Carryduff
                    <br />
                    Belfast, Co Down
                    <br />
                    BT8 8BP
                  </h6>
                  <br />
                  <button type="button" class="btn btn-secondary btn-sm">
                    Get Directions
                  </button>
                </div>
                <div className="col-sm-3">
                  <h4>Play</h4>
                  <ul>
                    <li>
                      <Link to="/">Aqua Park</Link>
                    </li>
                    <li>
                      <Link to="/">Hydro Climb</Link>
                    </li>
                    <li>
                      <Link to="/">Waterboard & Kneeboard</Link>
                    </li>
                    <li>
                      <Link to="/">Tubing</Link>
                    </li>
                    <li>
                      <Link to="/">Puddle Park</Link>
                    </li>
                    <li>
                      <Link to="/">Aqua Rugby</Link>
                    </li>
                    <li>
                      <Link to="/">Open Water Swim</Link>
                    </li>
                    <li>
                      <Link to="/">BBQ Pods</Link>
                    </li>
                    <li>
                      <Link to="/">Stand Up Paddle Boarding</Link>
                    </li>
                    <li>
                      <Link to="/">Kayaking</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <h4>Stay</h4>
                  <ul>
                    <li>
                      <Link to="/">Glamping Pods</Link>
                    </li>
                    <li>
                      <Link to="/">Safari Lodges</Link>
                    </li>
                    <li>
                      <Link to="/">lake Pod</Link>
                    </li>
                    <li>
                      <Link to="/">Houseboat</Link>
                    </li>
                    <li>
                      <Link to="/">IgluHut</Link>
                    </li>
                    <li>
                      <Link to="/">Forest Domes</Link>
                    </li>
                    <li>
                      <Link to="/">Luxury Glamping Pods</Link>
                    </li>
                    <li>
                      <Link to="/">Meadow Pods</Link>
                    </li>
                    <li>
                      <Link to="/">Hedge Village Pods</Link>
                    </li>
                    <li>
                      <Link to="/">Tree Garden Pods</Link>
                    </li>
                    <li>
                      <Link to="/">Caravan Park</Link>
                    </li>
                    <li>
                      <Link to="/">Tents</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <h4>Explore</h4>
                  <ul>
                    <li>
                      <Link to="/">Towpath</Link>
                    </li>
                    <li>
                      <Link to="/">Playpark</Link>
                    </li>
                  </ul>
                  <br />
                  <h4>About Us</h4>
                  <ul>
                    <li>
                      <Link to="/">History</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                  <br />
                  <h4>Important Links</h4>
                  <ul>
                    <li>
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/">Opening Times</Link>
                    </li>
                    <li>
                      <Link to="/">Health & Safety</Link>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="ml p-1">
              <p>{`Copyright @ ${moment().format("YYYY")} Let's Go Hydro All rights reserved`}</p>
            </div>

            <div className="ml-auto p-1">
              <p>Created By Big House Creative Web Design Belfast</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
Footer.PropsTypes = {
  copyrightText: PropTypes.string,
  footercopyrightText1: PropTypes.string,
};
export default Footer;
