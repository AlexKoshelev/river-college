import { observer } from "mobx-react-lite";
import React from "react";
import Priem2023 from "../../../../../assets/pdf/applicant/priem2023_v_el_forme.pdf";
import InfoMedOsmotr from "../../../../../assets/pdf/applicant/infoMedOsmotr.pdf";
import Trebov from "../../../../../assets/doc/applicant/trebov_urov_obr.docx";
import PerechenSpec from "../../../../../assets/pdf/applicant/priem2023_special_SPO.pdf";
import { toggleClassName } from "../../../../../utils/disabled";
import { NavLink } from "react-router-dom";

const ApplicantsInfo = observer(() => {
  return (
    <section>
      <h1>Узнать, как стать нашим курсантом</h1>
      <ul>
        <li>
          <a
            href={Priem2023}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о возможности приема заявлений и необходимых документов,
            предусмотренных настоящими Правилами, в электронной форме
          </a>
        </li>
        <li>
          <a
            href={InfoMedOsmotr}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Информация о необходимости прохождения поступающими обязательного
            предварительного медицинского осмотра
          </a>
        </li>
        <li>
          <a
            href={Trebov}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Требование уровня обр. СПО 2023
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
            Число мест в общежитии для иногородних абитуриентов, поступающих на
            1 курс очной формы
          </NavLink>
        </li>
        <li>
          <a
            href={PerechenSpec}
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Перечень специальностей СПО, по которым университет объявляет прием
            в соответствии с лицензией на осуществление образовательной
            деятельности
          </a>
        </li>
      </ul>
    </section>
  );
});
export default ApplicantsInfo;
