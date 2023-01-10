import React from "react";
import { NavLink } from "react-router-dom";
const CommonMenu = () => {
  return (
    <div className="">
      <ul className="common__menu">
        <h3 className="common__menu-title title">Навигация </h3>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="common"
          >
            Основные сведения
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="struct"
          >
            Структура и органы управления образовательной организацией
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="document"
          >
            Документы
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="education"
          >
            Образование
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="eduStandarts"
          >
            Образовательные стандарты и требования
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="employees"
          >
            Руководство. Педагогический (научно-педагогический) состав
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="objects"
          >
            Материально-техническое обеспечение и оснащённость образовательного
            процесса
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="grants"
          >
            Стипендии и меры поддержки обучающихся
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="paid__edu"
          >
            Платные образовательные услуги
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="budget"
          >
            Финансово-хозяйственная деятельность
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="vacant"
          >
            Вакантные места для приема (перевода) обучающихся
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="ovz"
          >
            Доступная среда
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "common__menu-active" : "common__menu-item"
            }
            to="inter"
          >
            Международное сотрудничество
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default CommonMenu;
