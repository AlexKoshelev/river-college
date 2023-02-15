import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router";
import Menu from "../../components/ui/commonMenu/Menu";
import { toggleClassName } from "../../utils/disabled";
const Sveden = observer(() => {
  return (
    <>
      <div
        className={`sveden__container ${toggleClassName(
          "_container",
          "_container-white",
          "_container-black",
          "_container-contrast"
        )} background-blue`}
      >
        <Menu />
        <div className="sveden__container-item">
          <Outlet />
        </div>
      </div>
    </>
  );
});
export default Sveden;
