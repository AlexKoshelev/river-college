import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../image/Image";
import LiveCard from "../liveCard/LiveCard";
const LiveCards = () => {
  return (
    <div className="liveCards">
      <LiveCard
        title={"Студеньческая жизнь"}
        className={"liveCardOne"}
        children={
          <NavLink to="live/studentsLive">
            <Image
              src="img/liveImg/students.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Отдых"}
        className={"liveCardTwo"}
        children={
          <NavLink to="live/rest">
            <Image
              src="img/liveImg/relax.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Спорт"}
        className={"liveCardThree"}
        children={
          <NavLink to="live/sport">
            <Image
              src="img/liveImg/sport.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Фотогаллерея"}
        className={"liveCardFour"}
        children={
          <NavLink to="live/photoGallery">
            <Image
              src="img/liveImg/photo.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Наша гордость"}
        className={"liveCardFive"}
        children={
          <NavLink to="live/ourPride">
            <Image
              src="img/liveImg/winner.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Наука"}
        className={"liveCardSix"}
        children={
          <NavLink to="live/science">
            <Image
              src="img/liveImg/science.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Преподаватели"}
        className={"liveCardSeven"}
        children={
          <NavLink to="live/teachers">
            <Image
              src="img/liveImg/prepod.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />

      <LiveCard
        title={"Актуальные вакансии"}
        className={"liveCardEight"}
        children={
          <NavLink to="live/vacancies">
            <Image
              src="img/liveImg/work.png"
              alt="Фото уплыло:("
              height="100%"
              width="100%"
            />
          </NavLink>
        }
      />
    </div>
  );
};
export default LiveCards;
