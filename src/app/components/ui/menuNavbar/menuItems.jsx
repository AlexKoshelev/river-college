import { Menu, Space } from "antd";

export function MainMenu({ onMainItemClick }) {
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
            width: "400px",
            border: "none",
            boxShadow: "none",
          }}
          onClick={onMainItemClick}
          items={[
            {
              label: "Главная",
              key: "main",
            },
            {
              label: "О филиале",
              key: "aboutBranch",
            },
            {
              label: "Историческая справка",
              key: "historicalReference",
            },
            { label: "Новости", key: "univercityNews" },
            { label: "План мероприятия", key: "univercityEvents" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}

export function EducationMenu({ onEducationItemClick }) {
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
          onClick={onEducationItemClick}
          style={{
            width: "400px",
            border: "none",
            boxShadow: "none",
          }}
          items={[
            /*  {
              label: "Курсантам",
              key: "cadets",
            },
            {
              label: "Заочникам",
              key: "for-parttime-students",
            },
            { label: "Выпускникам", key: "graduates" }, */
            { label: "Практическая подготовка", key: "practice" },
            { label: "Служба трудоустройства", key: "employmentService" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
export function ApplicantMenu({ onEnrolleeItemClick }) {
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
            width: "400px",
            border: "none",
            boxShadow: "none",
          }}
          onClick={onEnrolleeItemClick}
          items={[
            {
              label: "Абитурьенту",
              key: "applicants",
            },
            { label: "Дни открытых дверей", key: "open-day" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
export function TrainingMenu({ onTrainingItemClick }) {
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
            width: "450px",
            border: "none",
            boxShadow: "none",
          }}
          onClick={onTrainingItemClick}
          items={[
            {
              label: "О центре конвенционной подготовки и доп. образования",
              key: "aboutCdo",
            },
            {
              label: "Программы повышения квалификации членов экипажей",
              key: "advancedTraining",
            },
            {
              label: "Дистанционное обучение",
              key: "distanceLearning",
            },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
export function StudentLifeMenu() {
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
            width: "400px",
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
