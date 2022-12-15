import React from "react";
import EventCard from "../../common/eventCard/eventCard";
import "./eventsPages.scss";
const EventsPages = () => {
  return (
    <div className="eventsPages">
      <EventCard
        num={"1"}
        month={"Ноября"}
        title={"Праздничный концерт"}
        className={"firstCard"}
      />
      <EventCard
        num={"10"}
        month={"Декабря"}
        title={"День открытых дверей"}
        className={"secondCard"}
      />
      <EventCard
        num={"22"}
        month={"Яндваря"}
        title={"Благотворительный вечер"}
        className={"thirdCard"}
      />
      <EventCard
        num={"30"}
        month={"Июня"}
        title={"Экологический форум. Как спасти планету?"}
        className={"fourthCard"}
      />
    </div>
  );
};
export default EventsPages;
