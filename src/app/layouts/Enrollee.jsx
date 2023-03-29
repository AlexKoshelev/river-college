import React from "react";
import { Outlet } from "react-router";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
const Enrolly = () => {
  const linksMenu = [
    { title: "Приемная ампания 2023", path: "" },
    {
      title: "Дни открытых дверей",
      path: "",
    },
  ];
  return (
    <div className="_container">
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksMenu} />
      </div>
      <Outlet />
    </div>
  );
};
export default Enrolly;
