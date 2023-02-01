import React from "react";
import LiveCards from "../liveCards/LiveCards";
const LiveCardContainer = () => {
  return (
    <>
      <div className="livecard__container _container">
        <span className="infocontainer__titile">Жизнь ВГУВТ</span>
        <LiveCards />
      </div>
    </>
  );
};
export default LiveCardContainer;
