import React from "react";

import banner1 from "../../images/banner1.jpg";

const Banner = () => {
  return (
    <React.Fragment>
      <div id="home">
        <div className="container-fluid">
          <img src={banner1} alt="hydro banner" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
