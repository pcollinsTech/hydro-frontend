import React from "react";
import Layout from "../layout/Layout";
import BookNow from "../components/BookNow";
import ImageCarousel from "../components/ImageCarousel";
import ServiceStay from "../components/Services/ServicesStay";
import Banner from "../components/Banner/Banner";
import banner from "../assets/images/banners/stay.png";
import MemberOption from "../components/MemberOption";

const stay = (props) => {
  return (
    <Layout props={props}>
      <Banner title="STAY" subTitle="Let the relaxation await..." bannerImage={banner} />
      <br />
      <ServiceStay />
      <MemberOption />
      <br />
      <ImageCarousel />
      <BookNow />
    </Layout>
  );
};

export default stay;
