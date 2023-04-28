import React from "react";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import osnov_filosof_op from "../../../../assets/pdf/educationPage/230201/workPrograms1/osnov_filosof_op.pdf";
import osnov_filosof_opSig from "../../../../assets/pdf/educationPage/230201/workPrograms1/osnov_filosof_op.pdf.sig";
import osnov_filosof_opFos from "../../../../assets/pdf/educationPage/230201/workPrograms1/FOS_osnov_filosof_op.pdf";

const OrganizationOfTransportation = () => {
  return (
    <section className="workProgramm__wrapper">
      <h1>
        Основная профессиональная образовательная программа среднего
        профессионального образования для специальности 23.02.01 "Организация
        перевозок и управление на транспорте" (по видам), заочная
      </h1>
      <h2>Рабочие программы</h2>
      <table>
        <thead>
          <tr>
            <th>№ п/п</th>
            <th>Наименование дисциплины</th>
            <th>ЭЦП</th>
            <th>Фонды оценочных средств (ФОС)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={osnov_filosof_op} target={"_blank"} rel="noreferrer">
                Родной язык
              </a>
            </td>
            <td>
              <a href={osnov_filosof_opSig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
            <td>
              <a href={osnov_filosof_opFos} target={"_blank"} rel="noreferrer">
                Скачать
              </a>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              {" "}
              <PDF height={"25px"} width={"25px"} />
              <a href={osnov_filosof_op} target={"_blank"} rel="noreferrer">
                Родной язык
              </a>
            </td>
            <td>
              <a href={osnov_filosof_opSig} target={"_blank"} rel="noreferrer">
                ЭЦП
              </a>
            </td>
            <td>
              <a href={osnov_filosof_opFos} target={"_blank"} rel="noreferrer">
                Скачать
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default OrganizationOfTransportation;
