import React from "react";
import "./menuNavbar.scss";
const MenuNavbar = () => {
  return (
    <>
      <nav className="header__navbar">
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
      </nav>
    </>
  );
};
export default MenuNavbar;
