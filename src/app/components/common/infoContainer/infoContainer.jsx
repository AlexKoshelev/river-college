import "./infoContainer.scss";
import PropTypes from "prop-types";
import Button from "../button/Button";
import React from "react";
import { ReactComponent as ArrowButton } from "../../../assets/svg/arrowButton.svg";
const InfoContainer = ({
  title = "Новости университета",
  btnTitle = "Все новости",
}) => {
  return (
    <>
      <div className="infocontainer__header">
        <div className="infocontainer__titile">{title}</div>

        <div className="infocontainer__button">
          <Button className={"infopage__button"}>
            {btnTitle}
            {<ArrowButton />}
          </Button>
        </div>
      </div>
      <div className="infocontainer__content">
        <div className="infocontainer__image">
          <img
            src="newsimg/corpus.jpg"
            alt="Фото уплыло:("
            height={"100%"}
            width="100%"
          />
        </div>
        <div className="news__block">
          <div className="news__title">Заголовок новости</div>
          <div className="news__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem
            facilis a iusto sunt et, reiciendis cumque cupiditate aspernatur,
            possimus velit nam, officia nihil! Corrupti sapiente pariatur
            aperiam hic dolore! Voluptatum aliquid sit dolor iste sunt veritatis
            omnis saepe eligendi magnam, autem laborum corporis tempora
            provident et obcaecati officia ipsa nobis asperiores inventore sint
            debitis repudiandae quas molestiae fugit. Eum? Ratione tempora ab
            vero et aspernatur recusandae aliquam repellendus sed maxime iste,
            neque quam. Voluptatum natus quos, similique neque voluptatem ipsa
            distinctio corrupti facilis doloribus dolor quasi hic voluptates
            magnam. A, ut quisquam. At non modi placeat aliquid eos deleniti
            sunt! Nihil repellat facere sit pariatur quasi. Consectetur natus
            itaque est nulla inventore. Vel minus quam quae ratione, alias
            omnis?
          </div>
        </div>
      </div>
    </>
  );
};
InfoContainer.propTypes = {
  title: PropTypes.string,
  btnTitle: PropTypes.string,
};
export default InfoContainer;
