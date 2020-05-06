import React, { Component } from "react";
import PropTypes from "prop-types";
import LogoBlue from "../images/hydro-logo-blue.png";

export class Footer extends Component {
  render() {
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
                    <h6>E &nbsp;info@letsgohydro.com</h6>
                    <h6>T &nbsp;02895 920221</h6>
                    <br />
                    <h6>Lets Go Hydro Limited</h6>
                    <h6>Mealough Road</h6>
                    <h6>Carryduff</h6>
                    <h6>Belfast, Co Down</h6>
                    <h6>BT8 8BP</h6>
                    <button type="button" class="btn btn-secondary btn-sm">
                      Get Directions
                    </button>
                  </div>
                  <div className="col-sm-3">
                    <h4>Play</h4>
                    <h6>Aqua Park</h6>
                    <h6>Hydro Climb</h6>
                    <h6>Waterboard & Kneeboard</h6>
                    <h6>Tubing</h6>
                    <h6>Puddle Park</h6>
                    <h6>Aqua Rugby</h6>
                    <h6>Open Water Swim</h6>
                    <h6>BBQ Pods</h6>
                    <h6>Stand Up Paddle Boarding</h6>
                    <h6>Kayaking</h6>
                  </div>
                  <div className="col-sm-3">
                    <h4>Stay</h4>
                    <h6>Glamping Pods</h6>
                    <h6>Safari Lodges</h6>
                    <h6>lake Pod</h6>
                    <h6>Houseboat</h6>
                    <h6>IgluHut</h6>
                    <h6>Forest Domes</h6>
                    <h6>Luxury Glamping Pods</h6>
                    <h6>Meadow Pods</h6>
                    <h6>Hedge Village Pods</h6>
                    <h6>Tree Garden Pods</h6>
                    <h6>Caravan Park</h6>
                    <h6>Tents</h6>
                  </div>
                  <div className="col-sm-3">
                    <h4>Explore</h4>
                    <h6>Towpath</h6>
                    <h6>Playpark</h6>
                    <br />
                    <h4>About Us</h4>
                    <h6>History</h6>
                    <h6>Contact Us</h6>
                    <br />
                    <h4>Important Links</h4>
                    <h6>Privacy Policy</h6>
                    <h6>Terms & Conditions</h6>
                    <h6>Opening Times</h6>
                    <h6>Health & Safety</h6>
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
                <p>{this.props.copyrightText}</p>
              </div>

              <div className="ml-auto p-2">
                <p>{this.props.footercopyrightText1}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Footer.PropsTypes = {
  copyrightText: PropTypes.string,
  footercopyrightText1: PropTypes.string,
};
Footer.defaultProps = {
  copyrightText: "Copyright @ 2019 Let's Go Hydro All rights reserved",
  footercopyrightText1: "Created By Big House Creative Web Design Belfast",
};
export default Footer;
