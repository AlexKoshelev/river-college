import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../utils/disabled";
import EventCard from "../../common/eventCard/EventCard";

const EventsPages = observer(() => {
  return (
    <div
      className={toggleClassName(
        "eventsPages",
        "eventsPages-white",
        "eventsPages-black",
        "eventsPages-contrast"
      )}
    >
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
});
export default EventsPages;
