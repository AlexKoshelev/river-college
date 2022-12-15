import React from "react";
import ImageSlider from "../components/common/carousel/ImageSlider";
import LiveCardContainer from "../components/common/liveCardContainer/liveCardContainer";
import InfoPage from "../components/page/infoPage/infoPage";
import EventsPages from "../components/ui/eventsPages/eventsPages";
import NewsNavbar from "../components/ui/newsNavbar/newsNavbar";

const News = () => {
  return (
    <>
      <ImageSlider />
      <div className="_container">
        <NewsNavbar />
      </div>
      <EventsPages />
      <LiveCardContainer />
    </>
  );
};
export default News;
