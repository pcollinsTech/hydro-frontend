import React from "react";
import PropTypes from "prop-types";
import LogoBlue from "../assets/images/hydro-logo-blue.png";
import { Link } from "react-router-dom";

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
              <p>Icon / Icon / Icon</p>
            </div>

            {/* Use the Subscribe Component here */}

            <div className="col-sm-4">
              <h4>
                <b>SIGN-UP FOR NEWSLETTER</b>
              </h4>

              <div className="col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue=""
                  placeholder="hello@letsgohydro.com"
                />
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
                      <a href="tel:02895 920221">02895 920221</a>
                    </li>
                    <li>
                      <a href="maileto:info@letsgohydro.com" target="__blank">
                        info@letsgohydro.com
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
                      <a href="">Glamping Pods</a>
                    </li>
                    <li>
                      <a href="">Safari Lodges</a>
                    </li>
                    <li>
                      <a href="">lake Pod</a>
                    </li>
                    <li>
                      <a href="">Houseboat</a>
                    </li>
                    <li>
                      <a href="">IgluHut</a>
                    </li>
                    <li>
                      <a href="">Forest Domes</a>
                    </li>
                    <li>
                      <a href="">Luxury Glamping Pods</a>
                    </li>
                    <li>
                      <a href="">Meadow Pods</a>
                    </li>
                    <li>
                      <a href="">Hedge Village Pods</a>
                    </li>
                    <li>
                      <a href="">Tree Garden Pods</a>
                    </li>
                    <li>
                      <a href="">Caravan Park</a>
                    </li>
                    <li>
                      <a href="">Tents</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <h4>Explore</h4>
                  <ul>
                    <li>
                      <a href="">Towpath</a>
                    </li>
                    <li>
                      <a href="">Playpark</a>
                    </li>
                  </ul>
                  <br />
                  <h4>About Us</h4>
                  <ul>
                    <li>
                      <a href="">History</a>
                    </li>
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                  </ul>
                  <br />
                  <h4>Important Links</h4>
                  <ul>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="">Opening Times</a>
                    </li>
                    <li>
                      <a href="">Health & Safety</a>
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
            <div className="ml p-2">
              <p>{`Copyright @ ${moment().format(
                "YYYY"
              )} Let's Go Hydro All rights reserved`}</p>
            </div>

            <div className="ml-auto p-2">
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
