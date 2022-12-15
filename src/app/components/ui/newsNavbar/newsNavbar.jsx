import React from "react";
import { NavLink } from "react-router-dom";
import "./newsNavbar.scss";
const NewsNavbar = () => {
  return (
    <>
      <nav className="news__navbar">
        <div className="navbar__button">
          <NavLink to="/" className="href">
            Новости
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink to="/events" className="href">
            Мероприятия
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink to="/applicants" className="href">
            Поступающим
          </NavLink>
        </div>
        <div className="navbar__button">
          <NavLink to="/security" className="href">
            Безопасность
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default NewsNavbar;
