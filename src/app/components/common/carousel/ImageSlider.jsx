import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import Arctica from "../../../assets/img/main/arctica.jpg";

const ImageSlider = ({ className, ...rest }) => {
  /*  const items = [
    <div className="item item-1">Item 1</div>,
    <div className="item item-2">Item 2</div>,
    <div className="item item-3">Item 3</div>,
  ]; */
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        {...rest}
      >
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="_container">
            <h1 className="swiperSlideFirs__title">Наши выпускники!</h1>
            <p className="swiperSlideFirs__text">
              Статья о том, как сложилась судьба некоторых наших выпускников,
              которые связали свою жизнь с морем!
            </p>
            <ul className="swiperSlideFirs__list">
              <li>Преподаватель в родном училище</li>
              <li>Капитан огромного ледокола в арктике!</li>
              <li>И еще несколько интересных историй!</li>
            </ul>
            <div className="swiperSlideFirs__btn">Читать</div>
            <div className="_ibg">
              <img src={Arctica} alt="Картинка уплыла" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item item-2">Item 2</div>
        </SwiperSlide>
        {/*    <SwiperSlide>
          <div className="item item-3">Item 3</div>
        </SwiperSlide> */}
        {/* {items.map((item) => (
          <SwiperSlide key={item} className={className}>
            <img src={item} alt={item} className={className} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </>
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
