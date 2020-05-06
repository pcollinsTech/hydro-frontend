import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Layout from "../layout/Layout";
import MemberOption from "../components/MemberOption";
import ReviewText from "../components/ReviewText";
import ImageCarousel from "../components/ImageCarousel";
import BookNow from "../components/BookNow";

const Index = (props) => {
  return (
    <Layout props={props}>
      <Banner />
      <Services />
      <br />
      <MemberOption />
      <ReviewText />
      <ImageCarousel />
      <br />
      <BookNow />
    </Layout>
  );
};

export default Index;
