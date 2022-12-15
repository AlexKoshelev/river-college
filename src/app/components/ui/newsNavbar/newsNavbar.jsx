import React from "react";
import { NavLink } from "react-router-dom";
import "./newsNavbar.scss";
const NewsNavbar = () => {
  return (
    <>
      <nav className="news__navbar">
        <div className="navbar__button">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "href navbar__button-active" : "href"
            }
          >
            Новости
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink
            to="/events"
            className={(navData) =>
              navData.isActive ? "href navbar__button-active" : "href"
            }
          >
            Мероприятия
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink
            to="/applicants"
            className={(navData) =>
              navData.isActive ? "href navbar__button-active" : "href"
            }
          >
            Поступающим
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink
            to="/security"
            className={(navData) =>
              navData.isActive ? "href navbar__button-active" : "href"
            }
          >
            Безопасность
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default NewsNavbar;
