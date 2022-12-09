import "./cardSix.scss";
import React from "react";
import Badge from "../../bage/bage";
import Image from "../../image/image";
const CardSix = () => {
  return (
    <div className="newscard__container cardSix">
      <div className="newscard__background-six">
        <Image
          src="newsimg/musei.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-six">
          <div className="newscard__date">
            <Badge title={"07.12.2022"} className="newscard__date-bage-six" />
          </div>
          <div className="newscard__info-six">История морского флота</div>
        </div>
      </div>
    </div>
  );
};
export default CardSix;
