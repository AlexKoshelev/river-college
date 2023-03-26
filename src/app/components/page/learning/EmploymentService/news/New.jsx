import React from "react";
import Doc1 from "../../../../../assets/pdf/employmentService/severrechflot2023.pdf";
import Doc2 from "../../../../../assets/pdf/employmentService/volgofraht2023.pdf";
import Doc3 from "../../../../../assets/pdf/employmentService/neftejugansk2023.pdf";
const News = () => {
  return (
    <>
      <h1>Новости трудоустройства 2023 года</h1>
      <section>
        <p>
          Уважаемые студенты, для прохождения практики и трудоустройства
          ознакомьтесь со следующми документами:
        </p>
        <ul>
          <li>
            <a href={Doc1} target="_blank" rel="noopener noreferrer">
              в АО "СЕВЕРРЕЧФЛОТ" приглашают на производственную практику
            </a>
          </li>
          <li>
            <a href={Doc2} target="_blank" rel="noopener noreferrer">
              в ООО "ВОЛГОФРАХТ" требуются
            </a>
          </li>
          <li>
            <a href={Doc3} target="_blank" rel="noopener noreferrer">
              в ООО "Речной порт Нефтеюганск" требуются
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
export default News;
