import React from "react";
import InfoContainer from "../../common/infoContainer/infoContainer";

import NewsCardContainer from "../../ui/newsCardContainer/newsCardContainer";

import "./infoPage.scss";
const InfoPage = () => {
  return (
    <>
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
