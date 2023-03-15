import React, { useState } from "react";
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
import { ReactComponent as MenuLogo } from "../../../assets/svg/menuLogo.svg";
import { ReactComponent as Burger } from "../../../assets/svg/burger.svg";
import { ReactComponent as Cross } from "../../../assets/svg/cross.svg";
import { ReactComponent as Schedul } from "../../../assets/svg/calendar.svg";
import { ReactComponent as User } from "../../../assets/svg/user.svg";
import {
  toggleIconColor,
  toggleIconHeightSize,
  toggleIconWidthSize,
} from "../../../utils/disabled";
import Button from "../button/Button";

const PhoneMenu = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="phoneMenu">
      <div>
        <RiverUniversityLogo
          width="60px"
          height="60px"
          fill={toggleIconColor("#0C1C2B", "", "#000")}
        />
      </div>
      <div className="phoneMenu__title">
        <h1>
          Уфимский филиал <br /> ФГБОУ ВО “Волжский государственный <br />{" "}
          университет водного транспорта”
        </h1>
        <h3>
          {" "}
          Уфимский филиал <br /> ФГБОУ ВО “ВГУВТ”{" "}
        </h3>
      </div>
      <nav className="phoneMenu__menu">
        <div onClick={() => setNav(!nav)} className="phoneMenu__menu-toggle">
          {nav ? (
            <Cross
              stroke={toggleIconColor("#C80000")}
              width={toggleIconWidthSize("35px", "37px", "40px", "43px")}
              height={toggleIconHeightSize("35px", "37px", "40px", "43px")}
            />
          ) : (
            <Burger
              stroke={toggleIconColor("#C80000")}
              width={toggleIconWidthSize("35px", "37px", "40px", "43px")}
              height={toggleIconHeightSize("35px", "37px", "40px", "43px")}
            />
          )}
        </div>
        <div className={`phoneMenu__menu-dropdown ${!nav ? "" : " is-open "} `}>
          <div className="button__container">
            <Button className={"button__container-btn"}>
              {<Schedul className={"button__container-btn-icon"} />}
            </Button>
            <Button className={"button__container-btn"}>
              {<User className={"button__container-btn-icon"} />}
            </Button>
          </div>
          <MenuLogo className="menuLogo" />
          <ul className="nav-menu">
            <li>
              <a href="">Главная</a>
            </li>
            <li>
              <a href="">Образование</a>
            </li>
            <li>
              <a href="">Абитурьенту</a>
            </li>
            <li>
              <a href="">Повышение квалификации</a>
            </li>
            <li>
              <a href="">Студенческая жизнь</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default PhoneMenu;
