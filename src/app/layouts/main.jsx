import React from "react";
import { useParams } from "react-router";
import ImageSlider from "../components/common/carousel/ImageSlider";
import LiveCardContainer from "../components/common/liveCardContainer/LiveCardContainer";
import ApplicantsPage from "../components/page/applicantsPage/ApplicantsPage";
import EventsPages from "../components/page/eventsPages/EventsPages";
import InfoPage from "../components/page/infoPage/InfoPage";
import SecurityPage from "../components/page/securityPage/SecurityPage";
import NewsNavbar from "../components/ui/newsNavbar/NewsNavbar";

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
