import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../../utils/disabled";
import Rule from "../../../../../assets/pdf/applicant/pravila_priema_2023.pdf";
import PrikazRule from "../../../../../assets/pdf/applicant/prikaz_pravila_priema_2023.pdf";
import KCP from "../../../../../assets/pdf/applicant/КЦПСПО23-24.pdf";
import Trebov from "../../../../../assets/doc/applicant/trebov_urov_obr.docx";
import Uslovie from "../../../../../assets/pdf/applicant/usloviePriemaDogovor.pdf";
import InfoMedOsmotr from "../../../../../assets/pdf/applicant/infoMedOsmotr.pdf";
import PerechenSpec from "../../../../../assets/pdf/applicant/priem2023_special_SPO.pdf";
import Dogovor from "../../../../../assets/pdf/applicant/Dogovor_platn_obraz_uslug_2021.pdf";
import { NavLink } from "react-router-dom";
const Reception = observer(() => {
  return (
    <>
      <ol>
        <li>
          <a
            href={Rule}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Правила приема на обучение по программам среднего профессионального
            образования в 2023-2024 году
          </a>
        </li>
        <li>
          <a
            href={PrikazRule}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Приказ об утверждении правил приема на 2023 год
          </a>
        </li>
        <li>
          <a
            href={KCP}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            КЦП СПО 23/24 уч.год
          </a>
        </li>
        <li>
          <a
            href={Trebov}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Требования к уровню образования
          </a>
        </li>
        <li>
          <a
            href={Uslovie}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Условия приема на обучение по договорам
          </a>
        </li>
        <li>
          <NavLink
            to="../receptionPlaces"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о местах приема документов
          </NavLink>
        </li>
        <li>
          <a
            href={InfoMedOsmotr}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Информация о необходимости прохождения дополнительного медицинского
            осмотра
          </a>
        </li>
        <li>
          <NavLink
            to="../receptionTiming"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о сроках проведения приема.
          </NavLink>
        </li>
        <li>
          <a
            href={PerechenSpec}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Перечень специальностей
          </a>
        </li>
        <li>
          <NavLink
            to="../../../sveden/grants"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о наличии мест в общежитии
          </NavLink>
        </li>
        <li>
          <a
            href={Dogovor}
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
            target={"_blank"}
            rel="noreferrer"
          >
            Образец договора по образовательным программам среднего
            профессионального образования
          </a>
        </li>
        <li>
          <NavLink
            to="../educationCosts"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Стоимость обучения на коммерческой основе на 2023/2024 учебный год
            (пока приказа нет)
          </NavLink>
        </li>
      </ol>
    </>
  );
});
export default Reception;
