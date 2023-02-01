import React from "react";
import Image from "../image/Image";
import LiveCard from "../liveCard/LiveCard";
const LiveCards = () => {
  return (
    <div className="liveCards">
      <LiveCard
        title={"Студеньческая жизнь"}
        className={"liveCardOne"}
        children={
          <Image
            src="img/liveImg/students.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
      <LiveCard
        title={"Отдых"}
        className={"liveCardTwo"}
        children={
          <Image
            src="img/liveImg/relax.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
      <LiveCard
        title={"Спорт"}
        className={"liveCardThree"}
        children={
          <Image
            src="img/liveImg/sport.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
      <LiveCard
        title={"Фотогаллерея"}
        className={"liveCardFour"}
        children={
          <Image
            src="img/liveImg/photo.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
      <LiveCard
        title={"Наша гордость"}
        className={"liveCardFive"}
        children={
          <Image
            src="img/liveImg/winner.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
      <LiveCard
        title={"Наука"}
        className={"liveCardSix"}
        children={
          <Image
            src="img/liveImg/science.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
      <LiveCard
        title={"Преподаватели"}
        className={"liveCardSeven"}
        children={
          <Image
            src="img/liveImg/prepod.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
      <LiveCard
        title={"Актуальные вакансии"}
        className={"liveCardEight"}
        children={
          <Image
            src="img/liveImg/work.png"
            alt="Фото уплыло:("
            height="100%"
            width="100%"
          />
        }
      />
    </div>
  );
};
export default LiveCards;
