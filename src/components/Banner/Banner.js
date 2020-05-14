import React from "react";
import { FaMapSigns, FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { FiUsers, FiPlayCircle } from "react-icons/fi";
import "react-datepicker/dist/react-datepicker.css";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

const Banner = () => {
  const [startDate, setStartDate] = React.useState(new Date());
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
                  <FiPlayCircle size={55} /> &nbsp; Play Video
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

                    <div className="play-stay">
                      <label for="play">Play </label> &nbsp;
                      <input
                        type="radio"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />{" "}
                      &nbsp; &nbsp;
                      <label for="stay">Stay </label>&nbsp;
                      <input
                        type="radio"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                    </div>
                    <div className="input-fields">
                      <div className="items">
                        <label for="people" className="label">
                          Activity
                        </label>
                        <br />
                        <div class="controls">
                          <FaMapSigns />
                          <select class="floatLabel">
                            <option value="0">Aqua Park</option>
                            <option value="1">Hydro Climb</option>
                            <option value="2">Waterboard & Kneeboard</option>
                            <option value="3">Tubing</option>
                            <option value="4">Puddle Park</option>
                            <option value="5">Aqua Rugby</option>
                            <option value="6">Open Water Swim</option>
                            <option value="7">BBQ Pods</option>
                            <option value="8">Stand up Paddle Boarding</option>
                            <option value="9">Kayaking</option>
                          </select>
                        </div>
                      </div>
                      <div className="date-picker">
                        <label for="dates" className="label">
                          Dates
                        </label>
                        <br />
                        <FaRegCalendarAlt />
                        <DatePicker
                          className="datePicker"
                          showPopperArrow={false}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </div>
                    <div className="items">
                      <label for="people" className="label">
                        People
                      </label>
                      <br />
                      <div class="controls">
                        <FiUsers />
                        {/* <select class="floatLabel">
                          <option value="0">1 Adult - 1 Junior</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select> */}
                        <QuantitySelector />
                      </div>
                    </div>
                    <br />
                    <button type="button" class="btn btn-success btn-sm">
                      Check Availability
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
