import React from "react";
import { Outlet } from "react-router";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
const Training = () => {
  const linksMenu = [{ title: "Курсантам", path: "" }];
  return (
    <div className="_container">
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksMenu} />
      </div>
      <Outlet />
    </div>
  );
};
export default Training;
