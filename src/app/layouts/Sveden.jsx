import React from "react";
import { Outlet } from "react-router";
import Menu from "../components/ui/commonMenu/Menu";
const Sveden = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};
export default Sveden;
