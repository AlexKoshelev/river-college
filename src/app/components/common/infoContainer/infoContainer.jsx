import PropTypes from "prop-types";
import Button from "../button/Button";
import React from "react";
import { ReactComponent as ArrowButton } from "../../../assets/svg/arrowButton.svg";

const InfoContainer = ({ title, btnTitle, image, children, newsTitle }) => {
  return (
    <>
      <div className="infocontainer__header">
        <div className="infocontainer__titile">{title}</div>

        {btnTitle ? (
          <div className="infocontainer__button">
            <Button className={"infopage__button"}>
              {btnTitle}
              {<ArrowButton />}
            </Button>
          </div>
        ) : null}
      </div>
      <div className="infocontainer__content">
        <div className="infocontainer__image">{image}</div>
        <div className="news__block">
          <div className="news__title">{newsTitle}</div>
          <div className="news__text">{children}</div>
        </div>
      </div>
    </>
  );
};
InfoContainer.propTypes = {
  title: PropTypes.string,
  btnTitle: PropTypes.string,
  image: PropTypes.object,
  newsTitle: PropTypes.string,
  children: PropTypes.node,
};
export default InfoContainer;
