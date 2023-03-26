import { Menu, Space } from "antd";

export function MainMenu() {
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
            {
              label: "Курсантам",
              key: "cadets",
            },
            {
              label: "Заочникам",
              key: "for-parttime-students",
            },
            { label: "Выпускникам", key: "graduates" },
            { label: "Практическая подготовка", key: "practice" },
            { label: "Служба трудоустройства", key: "employmentService" },
          ]}
        ></Menu>
      </Space>
    </div>
  );
}
export function ApplicantMenu() {
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
export function TrainingMenu() {
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
