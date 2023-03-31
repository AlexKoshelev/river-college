import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
const Applicant = () => {
  return (
    <div className="_container">
      <BreadCrumbs />
      <Outlet />
    </div>
  );
};
export default Applicant;
