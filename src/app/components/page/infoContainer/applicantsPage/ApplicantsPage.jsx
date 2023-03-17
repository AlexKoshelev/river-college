import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { toggleClassName } from "../../../../utils/disabled";

import Image from "../../../common/image/Image";
const ApplicantsPage = observer(() => {
  return (
    <div className="applicantsPage">
      <div className="applicantsPage__header">
        <h1>Приемная кампания</h1>
        <h1>Сведения для поступающих</h1>
      </div>
      <div className="applicantsPage__main">
        <Image
          src="img/newsimg/postuplenie.png"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="applicants__container">
          <ul
            className={toggleClassName(
              "container-links",
              "container-links-white",
              "container-links-black",
              "container-links-contrast"
            )}
          >
            <li>
              {" "}
              <NavLink to={"./"}>Общие сведения</NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Правила приема</NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Специальности</NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Подача документов</NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Вступительные испытания</NavLink>
            </li>
            <li>
              <NavLink to={"./"}>Прием на договорной основе</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"./"}>Дни открытых дверей</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
export default ApplicantsPage;
