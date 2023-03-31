import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Arctica from "../../../assets/img/main/arctica.jpg";
import Boat from "../../../assets/img/main/boat.png";
import { NavLink } from "react-router-dom";

const ImageSlider = ({ className, ...rest }) => {
  /*  const items = [
    <div className="item item-1">Item 1</div>,
    <div className="item item-2">Item 2</div>,
    <div className="item item-3">Item 3</div>,
  ]; */
  return (
    <div className="imageSlider-show">
      <div className="_container">
        <div className="marquee-infinite">
          <img src={Boat} alt="" width={"250px"} height={"96px"} />
        </div>
        <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
        <div className="swiperSlideFirs__text">
          Статья о том, как сложилась судьба некоторых наших выпускников,
          которые связали свою жизнь с морем!
        </div>
        <ul className="swiperSlideFirs__list">
          <li>Преподаватель в родном училище</li>
          <li>Капитан огромного ледокола в арктике!</li>
          <li>И еще несколько интересных историй!</li>
        </ul>
        <NavLink to={"home/univercityNews"}>
          <div className="swiperSlideFirs__btn">Читать</div>
        </NavLink>
        <img src={Arctica} alt="Картинка уплыла" />
      </div>
    </div>
  );
};

ImageSlider.defaultProps = {
  pagination: true,
};

ImageSlider.propTypes = {
  /*  items: PropTypes.array.isRequired, */
  className: PropTypes.string,
  pagination: PropTypes.bool.isRequired,
};

export default ImageSlider;
