import React from "react";
import BackgroundImage from "../../images/booknow_background.png";

const BookNow = () => {
  return (
    <React.Fragment>
      <div className="book-now">
        <div className="container">
          <div className="section-title">
            <br />
            <h2>
              <b>Book Your Adventure Now</b>
            </h2>
            <br />
            <button type="button" class="btn btn-primary btn-sm">
              Book Now
            </button>
          </div>
          <img src={BackgroundImage} alt="welcome1" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookNow;
