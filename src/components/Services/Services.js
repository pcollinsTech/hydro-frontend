import React from "react";
import welcome1 from "../../assets/images/pexels-photo-2.jpg";
import Service from "./Service";
import { FaMapSigns, FaHome } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import styles from "./service.module.scss";

const data = [
  {
    id: 1,
    icon: <FaMapSigns size={35} />,
    title: "Play",
    description: "play",
    img: welcome1,
  },
  {
    id: 2,
    icon: <FaHome size={35} />,
    title: "Stay",
    description: "stay",
    img: welcome1,
  },
  {
    id: 3,
    icon: <FiMap size={35} />,
    title: "Explore",
    description: "explore",
    img: welcome1,
  },
  {
    id: 4,
    icon: <FaMapSigns size={35} />,
    title: "Events",
    description: "events",
    img: welcome1,
  },
  {
    id: 5,
    icon: <FaHome size={35} />,
    title: "Groups",
    description: "groups",
    img: welcome1,
  },
  {
    id: 6,
    icon: <FiMap size={35} />,
    title: "Memberships",
    description: "membership",
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
