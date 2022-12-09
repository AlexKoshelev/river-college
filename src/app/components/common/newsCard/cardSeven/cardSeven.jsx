import "./cardSeven.scss";
import React from "react";
import Badge from "../../bage/bage";
import Image from "../../image/image";
const CardSeven = () => {
  return (
    <div className="newscard__container cardSeven">
      <div className="newscard__background">
        <Image
          src="newsimg/mans.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend">
          <div className="newscard__date">
            <Badge title={"07.12.2022"} className="newscard__date-bage" />
          </div>
          <div className="newscard__info">
            Дорогие абитурьенты! Приглашаем Вас принять участие в приемной
            компании!
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSeven;
