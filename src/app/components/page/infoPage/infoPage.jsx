import React from "react";
import InfoContainer from "../../common/infoContainer/infoContainer";

import NewsCardContainer from "../../ui/newsCardContainer/newsCardContainer";

import NewsNavbar from "../../ui/newsNavbar/newsNavbar";
import "./infoPage.scss";
const InfoPage = () => {
  return (
    <>
      <div className="_container">
        <NewsNavbar />
      </div>
      <div className="infopage">
        <div className="_container">
          <InfoContainer />
          <NewsCardContainer />
        </div>
      </div>
    </>
  );
};
export default InfoPage;
