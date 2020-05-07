import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="container">
          <div className="col-sm-3">
            <h1>
              <b>
                LET THE <br />
                FUN BEGIN...
              </b>
            </h1>
            <br />
            <br />
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
    </React.Fragment>
  );
};

export default Banner;
