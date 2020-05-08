import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="banner-title">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h1>
                  <b>
                    LET THE <br />
                    FUN BEGIN...
                  </b>
                </h1>
                <br />
                <br />
                <button type="button" class="btn btn-primary btn-sm">
                  <FaPlayCircle size={45} /> &nbsp; Play Video
                </button>
                <button type="button" class="btn btn-secondary btn-sm">
                  Short Breaks
                </button>
              </div>
              <div className="availability">
                <div className="container">
                  <div className="col">
                    <div className="title">
                      <h5>Select Play or Stay</h5>
                    </div>
                    <div className="items">
                      <label for="play">Play </label> &nbsp;
                      <input type="radio" id="vehicle1" name="vehicle1" value="Bike" /> &nbsp; &nbsp;
                      <label for="stay">Stay </label>&nbsp;
                      <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                    </div>
                    <div className="input-fields">
                      <div className="items">
                        <label for="people" className="label">
                          Activity
                        </label>
                        <br />
                        <div class="controls">
                          <select class="floatLabel">
                            <option value="0">Aqua Park:</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                      <div className="items">
                        <label for="dates" className="label">
                          Dates
                        </label>
                        <br />
                        <input id="dates" type="date" className="date" />
                      </div>
                    </div>
                    <div className="items">
                      <label for="people" className="label">
                        People
                      </label>
                      <br />
                      <div class="controls">
                        <select class="floatLabel">
                          <option value="0">1 Adult - 1 Junior</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>
                    <br />
                    <button type="button" class="btn btn-success btn-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
