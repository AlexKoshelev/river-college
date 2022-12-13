import React from "react";
/* import { Carousel } from "../components/common/carousel/carousel"; */
import CarouselCompaund from "../components/common/carousel";
import LiveCardContainer from "../components/common/liveCardContainer/liveCardContainer";

import NavBar from "../components/common/NavBar/NavBar";

import InfoPage from "../components/page/infoPage/infoPage";
import Footer from "../components/ui/footer/footer";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className="app__main-container">
        <CarouselCompaund infinite>
          <CarouselCompaund.Page>
            <div className="item item-1">Item 1</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className="item item-2">Item 2</div>
          </CarouselCompaund.Page>
          <CarouselCompaund.Page>
            <div className="item item-3">Item 3</div>
          </CarouselCompaund.Page>
        </CarouselCompaund>
      </div>
      <InfoPage />
      <LiveCardContainer />
      <Footer />
    </>
  );
};
export default Main;
