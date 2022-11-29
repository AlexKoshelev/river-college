import "./styles/navBar.scss";
import { ReactComponent as GlassesLogo } from "../../../assets/svg/glasses.svg";
import { ReactComponent as CalendarLogo } from "../../../assets/svg/calendar.svg";
import { ReactComponent as MuseumLogo } from "../../../assets/svg/museum.svg";
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as SearchLogo } from "../../../assets/svg/search.svg";
import { ReactComponent as UserLogo } from "../../../assets/svg/user.svg";
import React from "react";
const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="_container">
          <div className="header__section3">
            {/* ссылка версия для слабовидящих  */}
            <div className="header__section3-link">
              <div className="header__link">
                <span className="icon">
                  <object>
                    <GlassesLogo width="18" height="18" />
                  </object>
                </span>
                <span className="text__underlined">
                  Версия для слабовидящих
                </span>
              </div>
              {/*  <!-- ссылка Сведения для образовательное организации --> */}
              <div className="header__link">
                <span className="icon">
                  <object>
                    <MuseumLogo width={"18px"} height={"18px"} />
                  </object>
                </span>
                <span className="text__underlined">
                  Сведения об образовательной организации
                </span>
              </div>
            </div>
            {/*    <!-- поиск --> */}
            <div className="header__section3-btn">
              <div className="header__section3-btn-margin header__search">
                <span className="icon">
                  <object>
                    <SearchLogo />
                  </object>
                </span>
              </div>
              {/*   <!-- расписание --> */}
              <div className="header__section3-btn-margin header__timetable">
                <button className="btn__timetable">
                  <span className="icon">
                    <object>
                      <CalendarLogo />
                    </object>
                  </span>
                  <span className="btn__office-text">Календарь</span>
                </button>
              </div>
              {/*  <!-- кнопка входа в личный кабинет --> */}
              <div className="header__section3-btn-margin header__office">
                <button className="btn__office">
                  <span className="icon">
                    <object>
                      <UserLogo />
                    </object>
                  </span>
                  <span className="btn__office-text">Личный кабинет</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Разделительная красная линия */}
        <hr className="redline" />

        <div className="_container">
          <div className="header__section2">
            <div className="signBoard__logo">
              <object>
                <RiverUniversityLogo />
              </object>
            </div>
            <div className="signBoard__tagline">
              СТАНЬ КАПИТАНОМ СВОЕЙ СУДЬБЫ!
            </div>
          </div>
        </div>

        <div className="_container">
          <div className="header__section1">
            <div className="header__item headerName">
              Уфимский филиал ФГБОУ ВО <br />
              "Волжский государственный университет водного транспорта"
            </div>
            <div className="header__navbar">
              <div className="header__item headerButton">
                <a href="/" className="href">
                  Повышение квалификации
                </a>
              </div>
              <div className="header__item headerButton">
                <a href="/" className="href">
                  Университет
                </a>
              </div>
              <div className="header__item headerButton">
                <a href="/" className="href">
                  Поступление
                </a>
              </div>
              <div className="header__item headerButton">
                <a href="/" className="href">
                  Обучение
                </a>
              </div>
              <div className="header__item headerButton">
                <a href="/" className="href">
                  Наука
                </a>
              </div>
              <div className="header__item headerButton">
                <a href="/" className="href">
                  Студентам
                </a>
              </div>
              <div className="header__item headerButton">
                <a href="/" className="href">
                  Контакты
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;
