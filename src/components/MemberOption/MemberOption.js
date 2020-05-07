import React from "react";
import lifevest from "../../assets/images/lifevest.jpg";

import "./member.module.css";
const MemberOption = () => {
  return (
    <React.Fragment>
      <div className="member-option">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="section-title text-left">
                <h2>
                  <b>GET YOUR HYDRO PASS TODAY</b>
                </h2>
                <br />
                <p>Get Access to all our hydro activities for one year including wet suit hire</p>
                <br />
                <p>Prices Start from just £99 per year</p>
                <br />
                <button type="button" class="btn btn-primary btn-sm">
                  See Member Options
                </button>
              </div>
            </div>
            <div className={"col-3"}>
              <img src={lifevest} alt="welcome1" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberOption;
