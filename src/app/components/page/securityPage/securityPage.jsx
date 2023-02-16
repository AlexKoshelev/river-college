import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { toggleClassName } from "../../../utils/disabled";
import Image from "../../common/image/Image";
import InfoContainer from "../../common/infoContainer/InfoContainer";
const SecurityPage = observer(() => {
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
          <div
            className={toggleClassName(
              "container-links",
              "container-links-white",
              "container-links-black",
              "container-links-contrast"
            )}
          >
            <NavLink to={"./"}>
              Сезонные заболевания и меры борьбы с ними
            </NavLink>
            <NavLink to={"./"}>Короновирус</NavLink>
            <NavLink to={"./"}>Противодействия коррупции</NavLink>
            <NavLink to={"./"}>Памятка ВГУВТ без коррупции</NavLink>
          </div>
        </div>
      </InfoContainer>
    </>
  );
});
export default SecurityPage;
