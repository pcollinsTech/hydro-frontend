import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="section-title text-left">
              <h1>
                <b>
                  LET THE <br />
                  FUN BEGIN...
                </b>
              </h1>
              <button type="button" class="btn btn-primary btn-sm">
                <FaPlayCircle />
                Play Video
              </button>
              <button type="button" class="btn btn-secondary btn-sm">
                Short Breaks
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
