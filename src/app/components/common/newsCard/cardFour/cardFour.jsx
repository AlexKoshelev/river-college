import "./cardFour.scss";
import React from "react";
import Badge from "../../bage/bage";
import Image from "../../image/image";
const CardFour = () => {
  return (
    <div className="newscard__container cardFour">
      <div className="newscard__background-four">
        <Image
          src="newsimg/cap.jpg"
          alt="Фото уплыло:("
          height="100%"
          width="100%"
        />

        <div className="newscard__frontend-four">
          <div className="newscard__date-four">
            <Badge title={"07.12.2022"} className="newscard__date-bage-four" />
          </div>
          <div className="newscard__info-four">
            Интервью с капитаном. Море преключений!
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardFour;
