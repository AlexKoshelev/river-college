import "./cardSix.scss";
import React from "react";
import Badge from "../../bage/bage";
import Image from "../../image/image";
const CardSix = () => {
  return (
    <div className="newscard__container">
      <div className="newscard__background">
        <Image
          src="newsimg/corpus.jpg"
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
export default CardSix;
