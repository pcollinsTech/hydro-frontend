import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./MainNav";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

const Layout = ({ props, children }) => {
  const [menuShow, setMenuShow] = useState(false);
  const { location } = props;
  return (
    <Fragment>
      <MainNav router={props} setMenuShow={setMenuShow} />
      {menuShow && <MobileMenu setMenuShow={setMenuShow} />}
      <div className={location.pathname !== "/" ? "not-home" : ""}>{children}</div>

      <Footer />
    </Fragment>
  );
};

export default Layout;
