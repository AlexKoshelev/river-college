import React from "react";
import { useParams } from "react-router";
import ImageSlider from "../components/common/carousel/ImageSlider";
import LiveCardContainer from "../components/common/liveCardContainer/liveCardContainer";
import ApplicantsPage from "../components/page/applicantsPage/applicantsPage";
import EventsPages from "../components/page/eventsPages/eventsPages";
import InfoPage from "../components/page/infoPage/infoPage";
import SecurityPage from "../components/page/securityPage/securityPage";
import NewsNavbar from "../components/ui/newsNavbar/newsNavbar";

const Main = () => {
  const params = useParams();

  return (
    <>
      <ImageSlider />
      <div className="_container">
        <NewsNavbar />
      </div>
      <div className="infopage">
        <div className="_container">
          {!params.element && <InfoPage />}
          {params.element === "events" ? <EventsPages /> : null}
          {params.element === "applicants" ? <ApplicantsPage /> : null}
          {params.element === "security" ? <SecurityPage /> : null}
        </div>
      </div>
      <LiveCardContainer />
    </>
  );
};
export default Main;
