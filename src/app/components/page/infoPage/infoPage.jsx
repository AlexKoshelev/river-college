import React from "react";
import InfoContainer from "../../common/infoContainer/infoContainer";

import NewsCardContainer from "../../ui/newsCardContainer/newsCardContainer";

import "./infoPage.scss";
const InfoPage = () => {
  return (
    <>
      <div className="infopage">
        <InfoContainer />
        <NewsCardContainer />
      </div>
    </>
  );
};
export default InfoPage;
