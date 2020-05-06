import React from "react";
import welcome1 from "../../assets/images/pexels-photo-2.jpeg";
import Service from "./Service";
const data = [
  {
    id: 1,
    title: "Canoeing",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 2,
    title: "Climbing",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 3,
    title: "SWimming",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 4,
    title: "Hiking",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 5,
    title: "Hiking",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 6,
    title: "Hiking",
    description: "lorem asdasdada",
    img: welcome1,
  },
];

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
            {data.map((activity) => (
              <Service img={activity.img} title={activity.title} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Welcome;
