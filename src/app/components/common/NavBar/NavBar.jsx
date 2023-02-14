import { ReactComponent as GlassesLogo } from "../../../assets/svg/glasses.svg";
import { ReactComponent as CalendarLogo } from "../../../assets/svg/calendar.svg";
import { ReactComponent as MuseumLogo } from "../../../assets/svg/museum.svg";
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as UserLogo } from "../../../assets/svg/user.svg";
import React from "react";
import Button from "../button/Button";
import MenuNavbar from "../../ui/menuNavbar/MenuNavbar";
import Search from "../search/Search";
import { NavLink } from "react-router-dom";
import Disabled from "../disabled/Disabled";
import { observer } from "mobx-react-lite";
import fontSize from "../../../store/fontSize";
import { toggleFontSize } from "../../../utils/disabled";
import { disabled } from "../../../utils/disabled";
import { toggleClassName } from "../../../utils/disabled";
const NavBar = observer(() => {
  return (
    <>
      <header
        style={{ fontSize: toggleFontSize(0.875) }}
        className={toggleClassName(
          "header",
          "header-white",
          "header-black",
          "header-contrast"
        )}
      >
        <div className="_container">
          {fontSize.fontSize !== "original" ? <Disabled /> : null}
          <div
            style={{ fontSize: toggleFontSize(0.6) }}
            className="header__section3"
          >
            {/* ссылка версия для слабовидящих  */}
            <div className="header__section3-link">
              <div className="header__link header__link-pointer">
                <span className="icon">
                  <object>
                    <GlassesLogo width="18" height="18" />
                  </object>
                </span>
                <span onClick={disabled} className="text__underlined">
                  Версия для слабовидящих
                </span>
              </div>

              {/*  <!-- ссылка Сведения для образовательное организации --> */}
              <div className="header__link">
                <span className="icon">
                  <object>
                    <MuseumLogo width="18px" height="18px" />
                  </object>
                </span>
                <span className="text__underlined">
                  <NavLink to="sveden/common">
                    Сведения об образовательной организации
                  </NavLink>
                </span>
              </div>
            </div>
            {/*    <!-- поиск --> */}
            <div className="header__section3-btn">
              <Search />
              {/*   <!-- расписание --> */}
              <div className="header__section3-btn-margin header__timetable">
                <Button
                  className={`button ${toggleClassName(
                    "btn__timetable",
                    "btn__timetable-white",
                    "btn__timetable-black",
                    "btn__timetable-contrast"
                  )}`}
                >
                  {
                    <span className="icon">
                      <object>
                        <CalendarLogo />
                      </object>
                    </span>
                  }
                  {
                    <span
                      style={{ fontSize: toggleFontSize(0.6) }}
                      className="btn__office-text"
                    >
                      Календарь
                    </span>
                  }
                </Button>
              </div>
              {/*  <!-- кнопка входа в личный кабинет --> */}
              <div className="header__section3-btn-margin header__office">
                <Button
                  className={`button ${toggleClassName(
                    "btn__office",
                    "btn__office-white",
                    "btn__office-black",
                    "btn__office-contrast"
                  )}`}
                >
                  {
                    <span className="icon">
                      <object>
                        <UserLogo />
                      </object>
                    </span>
                  }
                  {
                    <span
                      style={{ fontSize: toggleFontSize(0.6) }}
                      className="btn__office-text"
                    >
                      Личный кабинет
                    </span>
                  }
                </Button>
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
            <div style={{ fontSize: "2rem" }} className="signBoard__tagline">
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
            <MenuNavbar fontSize={fontSize} toggleFontSize={toggleFontSize} />
          </div>
        </div>
      </header>
    </>
  );
});
export default NavBar;
