import React from "react";
import { Outlet } from "react-router";
import Menu from "../../components/ui/commonMenu/Menu";
const Sveden = () => {
  return (
    <>
      <div className="sveden__container _container background-blue">
        <Menu />
        <div className="sveden__container-item">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Sveden;
