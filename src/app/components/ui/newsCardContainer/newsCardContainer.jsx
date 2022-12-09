import "./newsCardContainer.scss";
import React from "react";
import CardOne from "../../common/newsCard/cardOne/cardOne";
import CardTwo from "../../common/newsCard/cardTwo/cardTwo";
import CardThree from "../../common/newsCard/cardThree/cardThree";
import CardFour from "../../common/newsCard/cardFour/cardFour";
import CardFive from "../../common/newsCard/cardFive/cardFive";
import CardSix from "../../common/newsCard/cardSix/cardSix";
import CardSeven from "../../common/newsCard/cardSeven/cardSeven";
import CardEight from "../../common/newsCard/cardEight/cardEight";

const NewsCardContainer = () => {
  return (
    <div className="newscards">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
      <CardFive />
      <CardSix />
      <CardSeven />
      <CardEight />
    </div>
  );
};
export default NewsCardContainer;
