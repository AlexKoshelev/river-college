import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";

import EventCard from "../../../common/eventCard/EventCard";

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
        className={toggleClassName(
          "firstCard",
          "firstCard-white",
          "firstCard-black",
          "firstCard-contrast"
        )}
      />
      <EventCard
        num={"10"}
        month={"Декабря"}
        title={"День открытых дверей"}
        className={toggleClassName(
          "secondCard",
          "secondCard-white",
          "secondCard-black",
          "secondCard-contrast"
        )}
      />
      <EventCard
        num={"22"}
        month={"Яндваря"}
        title={"Благотворительный вечер"}
        className={toggleClassName(
          "thirdCard",
          "thirdCard-white",
          "thirdCard-black",
          "thirdCard-contrast"
        )}
      />
      <EventCard
        num={"30"}
        month={"Июня"}
        title={"Экологический форум. Как спасти планету?"}
        className={toggleClassName(
          "fourthCard",
          "fourthCard-white",
          "fourthCard-black",
          "fourthCard-contrast"
        )}
      />
    </div>
  );
});
export default EventsPages;
