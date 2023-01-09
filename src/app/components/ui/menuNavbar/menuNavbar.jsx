import React from "react";
import { Menu, Space } from "antd";
import "./menuNavbar.scss";

const MenuNavbar = () => {
  return (
    <>
      <nav className="header__navbar">
        <Menu
          className="header__navbar-button"
          style={{
            width: "100%",
            backgroundColor: "#0C1C2B",
            color: "white",
            hover: { color: "white" },
          }}
          mode="horizontal"
          items={[
            {
              label: "О филиале",
              key: "training",

              children: [
                {
                  label: <TrainingMenu />,
                  key: "TrainingMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            { label: "Повышение квалификации", key: "university" },
            { label: "Поступление", key: "admission" },
            { label: "Обучение", key: "learning" },
            { label: "Наука", key: "science" },
            { label: "Студентам", key: "students" },
            { label: "Контакты", key: "contacts" },
          ]}
        ></Menu>
      </nav>
    </>
  );
};
function TrainingMenu() {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        display: "flex",
      }}
    >
      <Space direction="horizontal">
        <Menu
          style={{
            width: "310px",
            border: "none",
            boxShadow: "none",
          }}
          items={[
            {
              label: "Основные сведения",
              key: "basic_information",
            },
            {
              label: "Материально-техническое обеспечение",
              key: "material",
            },
            { label: "Ученый совет", key: "council" },
          ]}
        ></Menu>
        <Menu
          style={{ width: "310px", border: "none", boxShadow: "none" }}
          items={[
            {
              label:
                "Структура и органы управления образовательной организацией",
              key: "structura",
            },
            {
              label: "Документы",
              key: "docs",
            },
            { label: "Стипендии и меры поддержки студентов", key: "council" },
          ]}
        ></Menu>
        <Menu
          style={{ width: "310px", border: "none", boxShadow: "none" }}
          items={[
            { label: "Образование", key: "learning" },
            {
              label: "Доступная среда",
              key: "basic_information",
            },
            {
              label: "Контакты",
              key: "material",
            },
          ]}
        ></Menu>
        <Menu
          style={{ width: "310px", border: "none", boxShadow: "none" }}
          items={[
            {
              label: "Основные сведения",
              key: "basic_information",
            },
            { label: "Ученый совет", key: "council" },
            { label: "Обучение", key: "learning" },
            {
              label:
                "Руководство. Педагогический (научно-педагогический) состав",
              key: "science",
            },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
export default MenuNavbar;
