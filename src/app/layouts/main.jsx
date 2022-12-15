import React from "react";
import ImageSlider from "../components/common/carousel/ImageSlider";
import LiveCardContainer from "../components/common/liveCardContainer/liveCardContainer";
import InfoPage from "../components/page/infoPage/infoPage";
import NewsNavbar from "../components/ui/newsNavbar/newsNavbar";

const Main = () => {
  return (
    <>
      <ImageSlider />
      <div className="_container">
        <NewsNavbar />
      </div>
      <InfoPage />
      <LiveCardContainer />
    </>
  );
};
export default Main;
