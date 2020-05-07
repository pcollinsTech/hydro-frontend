import React from "react";
import welcome1 from "../../assets/images/pexels-photo-2.jpeg";
import Service from "./Service";
import { FaMapSigns, FaHome, FaMap } from "react-icons/fa";
import styles from "./service.module.scss";

const data = [
  {
    id: 1,
    icon: <FaMapSigns />,
    title: "Play",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 2,
    icon: <FaHome />,
    title: "Stay",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 3,
    icon: <FaMap />,
    title: "Explore",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 4,
    icon: <FaMapSigns />,
    title: "Events",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 5,
    icon: <FaHome />,
    title: "Groups",
    description: "lorem asdasdada",
    img: welcome1,
  },
  {
    id: 6,
    icon: <FaMap />,
    title: "Memberships",
    description: "lorem asdasdada",
    img: welcome1,
  },
];

const Services = () => {
  return (
    <React.Fragment>
      <section className={styles.services_area}>
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
              <Service img={activity.img} title={activity.title} icon={activity.icon} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
