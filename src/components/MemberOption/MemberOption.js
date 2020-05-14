import React from "react";
import splash from "../../assets/images/splash_picture.png";

const MemberOption = () => {
  return (
    <React.Fragment>
      <div className="member-option">
        <div className="container">
          <div className="row">
            <div className="col-4">
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

            <div className="col">
              <div className="member-image">
                <img src={splash} alt="Group waving" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberOption;
