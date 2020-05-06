import React from "react";
import welcome1 from "../../images/pexels-photo-2.jpeg";
const Welcome = () => {
  return (
    <React.Fragment>
      <section className="services-area">
        <div className="container">
          <div className="section-title">
            <h2>
              <b>PLAY - STAY - EXPLORE</b>
            </h2>
            <h3>
              <b>AT LET'S GO HYDRO!</b>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 service_card">
              <img width="250" height="250" src={welcome1} alt="welcome1" />
              <button type="button" class="btn btn-primary btn-sm">
                View
              </button>
            </div>
            <div className="col-sm-4 service_card">
              <img width="250" height="250" src={welcome1} alt="welcome1" class="rounded" />
              <button type="button" class="btn btn-primary btn-sm">
                View
              </button>
            </div>

            <div className="col-sm-4 service_card">
              <img width="250" height="250" src={welcome1} alt="welcome1" class="rounded" />
              <button type="button" class="btn btn-primary btn-sm">
                View
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-4 service_card">
              <img width="250" height="250" src={welcome1} alt="welcome1" class="rounded" />
              <button type="button" class="btn btn-primary btn-sm">
                View
              </button>
            </div>

            <div className="col-sm-4 service_card">
              <img width="250" height="250" src={welcome1} alt="welcome1" class="rounded" />
              <button type="button" class="btn btn-primary btn-sm">
                View
              </button>
            </div>

            <div className="col-sm-4 service_card">
              <img width="250" height="250" src={welcome1} alt="welcome1" class="rounded" />
              <button type="button" class="btn btn-primary btn-sm">
                View
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Welcome;
