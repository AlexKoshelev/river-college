import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import PerechenPovKval from "../../../../assets/doc/training/perechenPovKval.docx";
import PerechenProfPerepodgot from "../../../../assets/doc/training/perechenProfPerepodgot.docx";
import PerechenProgramm from "../../../../assets/doc/training/perechenProgramm.docx";
import PreiskurantCen from "../../../../assets/pdf/training/PreiskurantCen.pdf";
import Dogovor from "../../../../assets/pdf/documentPage/Dogovor_platn_obraz_uslug_2021.pdf";
const AdvancedTraining = observer(() => {
  return (
    <div
      className={toggleClassName(
        "education__container",
        "education__container-white",
        "education__container-black",
        "education__container-contrast"
      )}
    >
      <section className="education__container-content">
        <h1 className="education__container-title">
          Программы повышения квалификации
        </h1>
        <h2>
          Программы повышения квалификации членов экипажей судов внутреннего
          водного транспорта
        </h2>
        <ul>
          <li>
            <a
              href="/"
              target={"_blank"}
              rel="noreferrer"
              style={{ backgroundColor: "red" }}
            >
              Программы дополнительного образования детей и взрослых
            </a>
          </li>
          <li>
            <a href={PerechenPovKval} target={"_blank"} rel="noreferrer">
              Программы повышения квалификации
            </a>
          </li>
          <li>
            <a href={PerechenProfPerepodgot} target={"_blank"} rel="noreferrer">
              Программы профессиональной переподготовки
            </a>
          </li>
          <li>
            <a href={PerechenProgramm} target={"_blank"} rel="noreferrer">
              Программы профессионального обучения
            </a>
          </li>
          <li>
            <a href={PreiskurantCen} target={"_blank"} rel="noreferrer">
              Прейскурант цен на дополнительные образовательные услуги
            </a>
          </li>
          <li>
            <a href={Dogovor} target={"_blank"} rel="noreferrer">
              Образец договора об оказании платных образовательных услуг
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
});
export default AdvancedTraining;
