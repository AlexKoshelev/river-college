import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
const Live = () => {
  return (
    <main className="_container">
      <BreadCrumbs />
      <Outlet />
    </main>
  );
};
export default Live;
