import React from "react";
import { Outlet } from "react-router";
import Port from "../../../../assets/img/education/port.jpg";
import Image from "../../../common/image/Image";
import ChapterMenu from "../../../ui/chapterMenu/ChapterMenu";
const EmploymentService = () => {
  const linksMenu = [
    { title: "О службе трудоустройства выпускников", path: "" },
    {
      title: "Документы подразделения",
      path: "../../sveden/document",
    },
    {
      title:
        "Вопросы и ответы по организации практики и трудоустройства выпускников",
      path: "faq",
    },
    {
      title: "Профильные организации - социальные партнеры филиала",
      path: "partners",
    },
    { title: "Новости трудоустройства 2023 года", path: "news" },
    { title: "Ярмарки вакансий", path: "jobFair" },
    { title: "Вакансии от работодателей", path: "vacanciesFrom" },
    { title: "Мониторинг трудоустройства выпускников", path: "feedback" },
    { title: "Полезные ссылки", path: "links" },
    {
      title: "Повышение квалификации и профессиональная переподготовка",
      path: "testWay",
    },
  ];

  return (
    <div className="education__container">
      <h1 className="education__container-title">
        Служба трудоустройства выпускников Уфимского филиала ФГБОУ ВО «ВГУВТ»
      </h1>
      <div className="education__container-image">
        <Image src={Port} width={"100%"} height={"400px"} />
      </div>
      <div className="education__container-navigate">
        <ChapterMenu title={"Навигация раздела"} linksArray={linksMenu} />
      </div>
      <div className="education__container-content">
        <Outlet />
      </div>
    </div>
  );
};
export default EmploymentService;
