import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { toggleClassName } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import InfoContainer from "../../common/infoContainer/InfoContainer";
const ApplicantsPage = observer(() => {
  return (
    <>
      <InfoContainer
        title={"Приемная кампания"}
        newsTitle={"Сведения для поступающих"}
        image={
          <Image
            src="img/newsimg/postuplenie.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      >
        <div className="applicants__container">
          <div
            className={toggleClassName(
              "container-links",
              "container-links-white",
              "container-links-black",
              "container-links-contrast"
            )}
          >
            <NavLink to={"./"}>Общие сведения</NavLink>
            <NavLink to={"./"}>Правила приема</NavLink>
            <NavLink to={"./"}>Специальности</NavLink>
            <NavLink to={"./"}>Подача документов</NavLink>
            <NavLink to={"./"}>Вступительные испытания</NavLink>
            <NavLink to={"./"}>Прием на договорной основе</NavLink>
            <NavLink to={"./"}>Дни открытых дверей</NavLink>
          </div>
          <div
            className={toggleClassName(
              "container-links",
              "container-links-white",
              "container-links-black",
              "container-links-contrast"
            )}
          >
            <NavLink to={"./"}>Олимпиады</NavLink>
            <NavLink to={"./"}>Подача документов</NavLink>
            <NavLink to={"./"}>Вступительные испытания</NavLink>
            <NavLink to={"./"}>Прием на договорной основе</NavLink>
            <NavLink to={"./"}>Дни открытых дверей</NavLink>
            <NavLink to={"./"}>Горячая линия</NavLink>
            <NavLink to={"./"}>Обратная связь</NavLink>
          </div>
        </div>
      </InfoContainer>
    </>
  );
});
export default ApplicantsPage;
