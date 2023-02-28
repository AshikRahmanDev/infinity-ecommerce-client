import React from "react";
import { Outlet } from "react-router-dom";
import VisibleHeader from "../Shared/VisibleHeader";

const OtherPageLayout = () => {
  return (
    <div>
      <VisibleHeader />
      <Outlet />
    </div>
  );
};

export default OtherPageLayout;
