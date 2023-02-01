import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../../common/image/Image";
import InfoContainer from "../../common/infoContainer/InfoContainer";
const SecurityPage = () => {
  return (
    <>
      <InfoContainer
        title={"Безопсность"}
        newsTitle={"Ознакомьтесь с информацией"}
        image={
          <Image
            src="img/newsimg/safety.jpg"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      >
        <div className="applicants__container">
          <div className="container-links">
            <NavLink className={"applicants-link"} to={"./"}>
              Сезонные заболевания и меры борьбы с ними
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Короновирус
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Противодействия коррупции
            </NavLink>
            <NavLink className={"applicants-link"} to={"./"}>
              Памятка ВГУВТ без коррупции
            </NavLink>
          </div>
        </div>
      </InfoContainer>
    </>
  );
};
export default SecurityPage;
