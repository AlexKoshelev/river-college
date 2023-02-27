import React from "react";
import { Menu, Space } from "antd";

const MenuNavbar = ({ fontSize, toggleFontSize }) => {
  return (
    <>
      <nav className="header__navbar">
        <Menu
          className="header__navbar-button"
          inlineCollapsed={false}
          forceSubMenuRender={false}
          style={{
            /*      width: "70%", */
            fontSize: toggleFontSize(0.875),
            backgroundColor: "#0C1C2B",
            color: "white",
            hover: { color: "white" },
          }}
          mode="horizontal"
          items={[
            {
              label: "Главная",
              key: "main",

              children: [
                {
                  label: <MainMenu />,
                  key: "mainMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Образование",
              key: "education",
              children: [
                {
                  label: <EducationMenu />,
                  key: "educationMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Абитурьенту",
              key: "applicant",
              children: [
                {
                  label: <ApplicantMenu />,
                  key: "applicantMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Повышение квалификации",
              key: "training",
              children: [
                {
                  label: <TrainingMenu />,
                  key: "trainingMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
            {
              label: "Студеньческая жизнь",
              key: "studentLife",
              children: [
                {
                  label: <StudentLifeMenu />,
                  key: "studentLifeMenu",
                  style: {
                    height: "fit-content",
                  },
                },
              ],
            },
          ]}
        ></Menu>
      </nav>
    </>
  );
};
function MainMenu() {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Space
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
        direction="horizontal"
      >
        <Menu
          style={{
            width: "310px",
            border: "none",
            boxShadow: "none",
          }}
          items={[
            {
              label: "О филиале",
              key: "about",
            },
            {
              label: "Историческая справка",
              key: "history-reference",
            },
            { label: "Новости", key: "news" },
            { label: "План мероприятия", key: "action_plan" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
function EducationMenu() {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Space
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
        direction="horizontal"
      >
        <Menu
          style={{
            width: "310px",
            border: "none",
            boxShadow: "none",
          }}
          items={[
            {
              label: "Курсантам",
              key: "cadets",
            },
            {
              label: "Заочникам",
              key: "for-parttime-students",
            },
            { label: "Практика", key: "practice" },
            { label: "Выпускникам", key: "graduates" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
function ApplicantMenu() {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Space
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
        direction="horizontal"
      >
        <Menu
          style={{
            width: "310px",
            border: "none",
            boxShadow: "none",
          }}
          items={[
            {
              label: "Основные сведения об университете",
              key: "basic_information",
            },
            {
              label: "Поступающим",
              key: "applicants",
            },
            { label: "Дни открытых дверей", key: "open-day" },
            {
              label: "Подготовительные курсы",
              key: "training-courses",
            },
            { label: "Олимпиады", key: "olympics" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
function TrainingMenu() {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Space
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
        direction="horizontal"
      >
        <Menu
          style={{
            width: "310px",
            border: "none",
            boxShadow: "none",
          }}
          items={[
            {
              label: "Программы подготовки членов экипажей морских судов",
              key: "sea-boat",
            },
            {
              label: "Программы подготовки членов экипажей речных судов",
              key: "river-boat",
            },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
function StudentLifeMenu() {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "0 auto",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Space
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
        }}
        direction="horizontal"
      >
        <Menu
          style={{
            width: "310px",
            border: "none",
            boxShadow: "none",
          }}
          items={[
            {
              label: "Новости",
              key: "news",
            },
            {
              label: "Мероприятия",
              key: "events",
            },
            { label: "Наша гордость", key: "our-pride" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
export default MenuNavbar;
