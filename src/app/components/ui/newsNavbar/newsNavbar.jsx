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
              navData.isActive ? "navbar__button-active" : ""
            }
          >
            Новости
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink
            to="/events"
            className={(navData) =>
              navData.isActive ? "navbar__button-active" : ""
            }
          >
            Мероприятия
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink
            to="/applicants"
            className={(navData) =>
              navData.isActive ? "navbar__button-active" : ""
            }
          >
            Поступающим
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink
            to="/security"
            className={(navData) =>
              navData.isActive ? "navbar__button-active" : ""
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
