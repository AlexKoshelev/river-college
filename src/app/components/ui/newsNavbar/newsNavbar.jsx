import React from "react";
import "./newsNavbar.scss";
const NewsNavbar = () => {
  return (
    <>
      <nav className="news__navbar">
        <div className="navbar__button">
          <a href="/" className="href">
            Новости
          </a>
        </div>
        <div className="navbar__button">
          <a href="/" className="href">
            Мероприятия
          </a>
        </div>
        <div className="navbar__button">
          <a href="/" className="href">
            Поступающим
          </a>
        </div>
        <div className="navbar__button">
          <a href="/" className="href">
            Безопасность
          </a>
        </div>
      </nav>
    </>
  );
};
export default NewsNavbar;
