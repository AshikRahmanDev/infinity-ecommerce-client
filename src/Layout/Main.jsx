import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import VisibleHeader from "../Shared/VisibleHeader";

const OtherPageLayout = () => {
  return (
    <div>
      <VisibleHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default OtherPageLayout;
