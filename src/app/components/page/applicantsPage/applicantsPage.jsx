import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../common/image/image";
import InfoContainer from "../../common/infoContainer/infoContainer";
import "./applicantsPage.scss";
const ApplicantsPage = () => {
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
          <div className="container-links">
            <NavLink className={"applicants-link"} to={"./"}>
              Общие сведения
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Правила приема
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Специальности
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Подача документов
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Вступительные испытания
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Прием на договорной основе
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Дни открытых дверей
            </NavLink>
          </div>
          <div className="container-links">
            <NavLink className={"applicants-link"} to={"./"}>
              Олимпиады
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Подача документов
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Вступительные испытания
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Прием на договорной основе
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Дни открытых дверей
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Горячая линия
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Обратная связь
            </NavLink>
          </div>
        </div>
      </InfoContainer>
    </>
  );
};
export default ApplicantsPage;
