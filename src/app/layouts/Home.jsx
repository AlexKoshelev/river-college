import React from "react";
import { Outlet } from "react-router";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import ChapterMenu from "../components/ui/chapterMenu/ChapterMenu";
const Home = () => {
  const linksMenu = [
    { title: "Курсантам", path: "" },
    {
      title: "Заочникам",
      path: "",
    },
    {
      title: "Выпускникам",
      path: "",
    },
    {
      title: "Практическая подготовка",
      path: "practice",
    },
    {
      title: "Служба трудоустройства",
      path: "employmentService",
    },
  ];
  return (
    <div className="_container">
      <BreadCrumbs />
      <div className="chapter__menu-show">
        <ChapterMenu linksArray={linksMenu} />
      </div>
      <Outlet />
    </div>
  );
};
export default Home;
