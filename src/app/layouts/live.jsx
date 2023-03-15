import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
const Live = () => {
  return (
    <>
      <BreadCrumbs />
      <Outlet />
    </>
  );
};
export default Live;
