import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import photo3 from "../../images/pexels-photo-3.jpeg";

const items = [
  {
    src: photo3,
    altText: "Slide 1",
    key: "1",
  },
  {
    src: photo3,
    altText: "Slide 2",
    key: "2",
  },
  {
    src: photo3,
    altText: "Slide 3",
    key: "3",
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
