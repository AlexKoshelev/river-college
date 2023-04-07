import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import Licenz from "../../../../assets/pdf/documentPage/licenz_vip20220916.pdf";
import { ReactComponent as PDF } from "../../../../assets/svg/office/pdf.svg";
import d230201 from "../../../../assets/pdf/educationPage/disciplin230201.pdf";
import d230203 from "../../../../assets/pdf/educationPage/disciplin260203.pdf";
import d230205 from "../../../../assets/pdf/educationPage/disciplin260205.pdf";
import d230206 from "../../../../assets/pdf/educationPage/disciplin260206.pdf";
import Pologenie_Parus from "../../../../assets/pdf/educationPage/Pologenie_Parus.pdf";
import Pologhenie_DO from "../../../../assets/pdf/educationPage/Pologhenie_DO.pdf";
import Pologhenie_EL_Sreda from "../../../../assets/pdf/educationPage/Pologhenie_EL_Sreda.pdf";
import Pologhenie_kontrolDO from "../../../../assets/pdf/educationPage/Pologhenie_kontrolDO.pdf";
import FOS_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/FOS_IA_SV_uglubl.pdf";
import Pologenie_attest_vipusk from "../../../../assets/pdf/educationPage/260203/Pologenie_attest_vipusk.pdf";
import Pologenie_OOP from "../../../../assets/pdf/educationPage/260203/Pologenie_OOP.pdf";
import Programma_IA_SV_uglubl from "../../../../assets/pdf/educationPage/260203/Programma_IA_SV_uglubl.pdf";
import Programma_IA_SM from "../../../../assets/pdf/educationPage/260206/Programma_IA_SM.pdf";
import Programma_IA_EM from "../../../../assets/pdf/educationPage/260206/Programma_IA_EM.pdf";
import FOS_IA_EM from "../../../../assets/pdf/educationPage/260205/FOS_IA_EM.pdf";
import FOS_IA_SM from "../../../../assets/pdf/educationPage/260205/FOS_IA_SM.pdf";
import FOS_IA_OP from "../../../../assets/pdf/educationPage/230201/FOS_IA_OP.pdf";
import Programma_IA_OP from "../../../../assets/pdf/educationPage/230201/Programma_IA_OP.pdf";
import KPV from "../../../../assets/pdf/educationPage/KPV.pdf";

import RPV_OP from "../../../../assets/pdf/educationPage/230201/RPV_OP.pdf";
import RPV_SV from "../../../../assets/pdf/educationPage/260203/RPV_SV.pdf";
import RPV_SM from "../../../../assets/pdf/educationPage/260205/RPV_SM.pdf";
import RPV_EM from "../../../../assets/pdf/educationPage/260206/RPV_EM.pdf";
import Image1 from "../../../../assets/pdf/educationPage/260203/1.1.jpg";
import Image2 from "../../../../assets/pdf/educationPage/260203/1.2.jpg";
import Image3 from "../../../../assets/pdf/educationPage/260203/1.3.jpg";
import Image4 from "../../../../assets/pdf/educationPage/260203/2.1.jpg";
import Image5 from "../../../../assets/pdf/educationPage/260203/2.2.jpg";
import Image6 from "../../../../assets/pdf/educationPage/260203/2.3.jpg";
import Image7 from "../../../../assets/pdf/educationPage/260203/3.1.jpg";
import Image8 from "../../../../assets/pdf/educationPage/260203/3.2.jpg";
import Image9 from "../../../../assets/pdf/educationPage/260203/3.3.jpg";
import Image10 from "../../../../assets/pdf/educationPage/260203/4.1.jpg";
import Image11 from "../../../../assets/pdf/educationPage/260203/4.2.jpg";

import Image12 from "../../../../assets/pdf/educationPage/260206/5.jpg";
import Image13 from "../../../../assets/pdf/educationPage/260206/6.jpg";
import Image14 from "../../../../assets/pdf/educationPage/260206/7.jpg";
import Image15 from "../../../../assets/pdf/educationPage/260206/8.jpg";

import Image16 from "../../../../assets/pdf/educationPage/260205/9.jpg";
import Image17 from "../../../../assets/pdf/educationPage/260205/10.jpg";
import Image18 from "../../../../assets/pdf/educationPage/260205/11.jpg";
import Image19 from "../../../../assets/pdf/educationPage/260205/11.1.jpg";
import Image20 from "../../../../assets/pdf/educationPage/260205/12.jpg";
import Image21 from "../../../../assets/pdf/educationPage/260205/12.1.jpg";
import Image22 from "../../../../assets/pdf/educationPage/230201/13.jpg";
import Image23 from "../../../../assets/pdf/educationPage/230201/14.jpg";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
const Education = observer(() => {
  return (
    <div
      style={{ fontSize: toggleFontSize(1) }}
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <h1
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Образование
      </h1>
      <ul>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={Licenz} target={"_blank"} rel="noreferrer">
            Выписка из реестра лицензий Федеральной службы по надзору в сфере
            образования и науки (16.09.2022)
          </a>
        </li>
      </ul>
      <TableWrapper
        title="Информация о сроке действия государственной аккредитации образовательной
        программы, о языках, на которых осуществляется образование (обучение):"
      >
        <table>
          <tbody>
            <tr>
              <td>Код</td>
              <td>
                Наименование профессии, специальности, направления подготовки
              </td>
              <td>Уровень образования</td>
              <td>Формы обучения</td>
              <td>Срок получения образования</td>
              <td>
                Срок действия государственной аккредитации (дата окончания
                действия свидетельства о государственной аккредитации)
              </td>
              <td>Языки, на которых осуществляется образование (обучение)</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.03 </td>
              <td rowSpan="3">"Судовождение"</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>
                3 года 10 мес <br />2 года 10 мес
              </td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>
                4 года 10 мес <br /> 3 года 10 мес
              </td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3">"Судовождение" (углубленная подготовка)</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>
                4 года 10 мес <br /> 3 года 10 мес
              </td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>
                4 года 10 мес <br /> 5 лет 10 мес
              </td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.05 </td>
              <td rowSpan="3">
                "Эксплуатация судовых энергетических установок" (базовый
                уровень)
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>
                3 года 10 мес <br /> 2 года 10 мес
              </td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>
                4 года 10 мес <br /> 3 года 10 мес
              </td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.06</td>
              <td rowSpan="3">
                "Эксплуатация судового электрооборудования и средств автоматики"
                (базовый уровень)
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>3 года 10 мес</td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                "Организация перевозок и управление на транспорте (по видам)"
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная форма</td>
              <td>3 года 10 мес</td>
              <td rowSpan="3">27.02.2025</td>
              <td rowSpan="3">Русский</td>
            </tr>
            <tr>
              <td>очно-заочная форма</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная форма</td>
              <td>2 года 10 мес</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о профессионально-общественной аккредитации образовательной
        программы:
      </h3>
      <div className="common__container scroll-table struct__scrollTable">
        <table className="">
          <tbody>
            <tr>
              <td>Код</td>
              <td>
                Наименование профессии, специальности, направления подготовки
              </td>
              <td>Наименование аккредитующей организации</td>
              <td>
                Срок действия профессионально-общественной аккредитации (дата
                окончания действия свидетельства о профессионально-общественной
                аккредитации)
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <TableWrapper
        title=" Информация о численности обучающихся по реализуемым образовательным
        программам за счет бюджетных ассигнований федерального бюджета, бюджетов
        субъектов Российской Федерации, местных бюджетов и по договорам об
        образовании за счет средств физических и (или) юридических лиц на
        01.10.2022:"
      >
        <table>
          <tbody>
            <tr>
              <td rowSpan="3">Код</td>
              <td rowSpan="3">
                Наименование специальности, направления подготовки, шифр и
                наименование научной специальности
              </td>
              <td rowSpan="3">Уровень образования</td>
              <td rowSpan="3">Формы обучения</td>
              <td colSpan="8">
                Численность обучающихся за счет (количество человек):
              </td>
              <td rowSpan="3">Общая численность обучающихся</td>
              <td rowSpan="3">
                Численность обучающихся, являющихся иностранными гражданами
              </td>
            </tr>
            <tr>
              <td colSpan="2">бюджетных ассигнований федерального бюджета</td>
              <td colSpan="2">бюджетов субъектов Российской Федерации</td>
              <td colSpan="2">местных бюджетов </td>
              <td colSpan="2">средств физических и (или) юридических лиц</td>
            </tr>
            <tr>
              <td>всего</td>
              <td>в том числе иностранных граждан</td>
              <td>всего</td>
              <td>в том числе иностранных граждан</td>
              <td>всего</td>
              <td>в том числе иностранных граждан</td>
              <td>всего</td>
              <td>в том числе иностранных граждан</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>--</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                Организация перевозок и управление на транспорте
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>71</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>3</td>
              <td>-</td>
              <td>74</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.03</td>
              <td rowSpan="3">Судовождение</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>319</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>10</td>
              <td>-</td>
              <td>329</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td></td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>75</td>
              <td>-</td>
              <td>75</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.05</td>
              <td rowSpan="3">Эксплуатация судовых энергетических установок</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>187</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>8</td>
              <td>-</td>
              <td>195</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
              <td>-</td>
              <td>2</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.06</td>
              <td rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>193</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
              <td>-</td>
              <td>195</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о численности обучающихся, являющихся иностранными
        гражданами: 3 обучающихся
      </h3>

      <TableWrapper
        title=" Информация о результатах приема по каждой профессии, специальности
        среднего профессионального образования (при наличии вступительных
        испытаний), каждому направлению подготовки или специальности высшего
        образования с различными условиями приема (на места за счет бюджетных
        ассигнований федерального бюджета, бюджетов субъектов Российской
        Федерации, местных бюджетов и по договорам об образовании за счет
        средств физических и (или) юридических лиц):"
      >
        {" "}
        <table>
          <tbody>
            <tr>
              <td rowSpan="2">Код</td>
              <td rowSpan="2">
                Наименование специальности, направления подготовки
              </td>
              <td rowSpan="2">Уровень образования</td>
              <td rowSpan="2">Формы обучения</td>
              <td colSpan="4">
                Результаты приема обучающихся за счет (количество человек):
              </td>
              <td rowSpan="2">
                Средняя сумма набранных баллов по всем вступительным испытаниям
              </td>
            </tr>
            <tr>
              <td>бюджетных ассигнований федерального бюджета</td>
              <td>бюджетов субъектов Российской Федерации</td>
              <td>местных бюджетов </td>
              <td>средств физических и (или) юридических лиц</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>25</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3"> Судовождение (9 кл)</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>50</td>
              <td>0</td>
              <td>0</td>
              <td>3</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3"> Судовождение (11 кл)</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>14</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.05</td>
              <td rowSpan="3">Эксплуатация судовых энергетических установок</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>50</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">26.02.06</td>
              <td rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>50</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>очно-заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>

      <TableWrapper
        title="Информация о результатах перевода, восстановления и отчисления на
        01.10.2022"
      >
        <table>
          <tbody>
            <tr>
              <td rowSpan="2">Код</td>
              <td rowSpan="2">
                Наименование специальности, направления подготовки
              </td>
              <td rowSpan="2">Уровень образования</td>
              <td rowSpan="2">Формы обучения</td>
            </tr>
            <tr>
              <td>
                Численность обучающихся, переведенных в другие образовательные
                организации
              </td>
              <td>
                Численность обучающихся, переведенных из других образовательных
                организаций
              </td>
              <td>Численность восстановленных обучающихся</td>
              <td>Численность отчисленных обучающихся</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td rowSpan="3">23.02.01</td>
              <td rowSpan="3">
                {" "}
                Организация перевозок и управление на транспорте
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="3">26.02.03</td>
              <td rowSpan="3"> Судовождение</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>-</td>
              <td>1</td>
              <td>-</td>
              <td>3</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td rowSpan="3">26.02.05</td>
              <td rowSpan="3">Эксплуатация судовых энергетических установок</td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="3">26.02.06</td>
              <td rowSpan="3">
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td rowSpan="3">среднее профессиональное образование</td>
              <td>очная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>2</td>
            </tr>
            <tr>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </TableWrapper>

      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Реализуемые образовательные программы (учебные предметы, курсы,
        дисциплины (модули), практики), в том числе адаптированные
      </h3>
      <ul>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230203} target={"_blank"} rel="noreferrer">
            26.02.03 "Судовождение"{" "}
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230206} target={"_blank"} rel="noreferrer">
            26.02.06 "Эксплуатация судового электрооборудования и средств
            автоматики"
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230205} target={"_blank"} rel="noreferrer">
            26.02.05 "Эксплуатация судовых энергетических установок"
          </a>
        </li>
        <li className="doc__item">
          <PDF height={"25px"} width={"25px"} />
          <a href={d230201} target={"_blank"} rel="noreferrer">
            23.02.01 "Организация перевозок и управление на транспорте (по
            видам)
          </a>
        </li>
      </ul>

      <TableWrapper title="Информация по неадаптированным образовательным программам:">
        <table>
          <tbody>
            <tr>
              <td>Код</td>
              <td>
                Наименование специальности, направления подготовки, шифр и
                наименование области науки, научной специальности
              </td>
              <td>
                Уровень образования: 1) высшее образование -бакалавриат; 2)
                высшее образование - специалитет; 3) высшее образование -
                магистратура; 4) высшее образование - подготовка кадров высшей
                квалификации; 5) среднее профессиональное образование
              </td>
              <td>
                Реализуемые формы обучения: 1) очная; 2) очно-заочная; 3)
                заочная
              </td>
              <td>
                Ссылка на описание образовательной программы с приложением ее
                копии
              </td>
              <td>Ссылка на учебный план</td>
              <td>
                Ссылка на аннотации к рабочим программам дисциплин (по каждой
                дисциплине в составе образовательной программы)
              </td>
              <td>
                Ссылка на рабочие программы дисциплин, рабочие программы
                практик, предусмотренных соответствующей образовательной
                программой
              </td>
              <td>Ссылка на календарный учебный график</td>
              <td>Ссылка на рабочие программы воспитания</td>
              <td>Ссылка на календарный план воспитательной работы</td>
              <td>
                Ссылка на методические и иные документы, разработанные
                образовательной организацией для обеспечения образовательного
                процесса
              </td>
              <td>
                Использование при реализации образовательных программ
                электронного обучения и дистанционных образовательных технологий
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td> высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>Судовождение (углубленная подготовка), 2020 года набора</td>
              <td>среднее профессиональное образование</td>
              <td>очно-заочная </td>
              <td>ООП для специальности 26.02.03 "Судовождение" * ЭЦП</td>
              <td>
                Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                очная/заочная Учебный план 26.02.03 "Судовождение", на базе 11
                классов, очная
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.03 "Судовождение"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.03
                "Судовождение" Рабочая программа учебной практики, (очная) ФОС
                учебной практики (очная) Рабочая программа производственной
                практики, (очная) ФОС производственной практики (очная) Рабочая
                программа производственной практики, (заочная) Рабочая программа
                учебной практики (заочная)
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image1} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image2} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, очная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image3} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", заочная
                    </a>
                  </li>
                </ul>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td></td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>Судовождение (углубленная подготовка), 2019 года набора</td>
              <td>среднее профессиональное образование</td>
              <td>очно-заочная </td>
              <td>ООП для специальности 26.02.03 "Судовождение" * ЭЦП</td>
              <td>
                Учебный план 26.02.03 "Судовождение", на базе 11 классов,
                заочная Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                заочная Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                очная
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.03 "Судовождение"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.03
                "Судовождение" Рабочая программа учебной практики, (очная) ФОС
                учебной практики (очная) Рабочая программа производственной
                практики, (очная) ФОС производственной практики (очная) Рабочая
                программа производственной практики, (заочная) Рабочая программа
                учебной практики (заочная)
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image4} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, заочная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image5} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, заочная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image6} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>Судовождение (углубленная подготовка), 2018 года набора</td>
              <td>среднее профессиональное образование</td>
              <td>очно-заочная </td>
              <td>ООП для специальности 26.02.03 "Судовождение" * ЭЦП</td>
              <td>
                Учебный план 26.02.03 "Судовождение", на базе 11 классов,
                заочная Учебный план 26.02.03 "Судовождение", на базе 9 классов,
                очная Учебный план 26.02.03 "Судовождение", на базе 11 классов,
                очная
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.03 "Судовождение"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.03
                "Судовождение" Рабочая программа учебной практики, (углубл,
                прием 2018, 3 г 10 мес, очная) ФОС учебной практики (углубл,
                прием 2018, 3 г 10 мес, очная) Рабочая программа
                производственной практики, (углубл., прием 2018, 3 г 10мес,
                очная) ФОС производственной практики (углубл., прием 2018, 3 г
                10мес, очная) Рабочая программа производственной практики,
                (углубл., прием 2018, 3 г 10мес, заочная) Рабочая программа
                учебной практики (углубл., прием 2018, 3 г 10мес, заочная)
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image7} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, заочная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image8} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image9} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>Судовождение (углубленная подготовка), 2017 года набора</td>
              <td>среднее профессиональное образование</td>
              <td>очно-заочная </td>
              <td>ООП для специальности 26.02.03 "Судовождение", очная* ЭЦП</td>
              <td>
                Учебный план 26.02.03 "Судовождение", на базе 11 классов, очная
                Учебный план 26.02.03 "Судовождение", на базе 9 классов, очная
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.03 "Судовождение"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.03
                "Судовождение" Рабочая программа учебной практики, (очная) ФОС
                учебной практики (очная) Рабочая программа производственной
                практики, (очная) ФОС производственной практики (очная) Рабочая
                программа производственной практики, (заочная) Рабочая программа
                учебной практики (заочная)
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image10} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 11 классов, очная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image11} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.03
                      "Судовождение", на базе 9 классов, очная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SV} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.03 "Судовождение"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260203
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={FOS_IA_SV_uglubl}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260203 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.03 </td>
              <td>Судовождение</td>
              <td>среднее профессиональное образование</td>
              <td>очно-заочная </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств
                автоматики", 2020 года набора
              </td>
              <td>среднее профессиональное образование </td>
              <td>очная</td>
              <td>
                ООП для специальности 26.02.06 "Эксплуатация судового
                электрооборудования и средств автоматики" * ЭЦП
              </td>
              <td>
                Учебный план 26.02.06 "Эксплуатация судового электрооборудования
                и средств автоматики", на базе 9 классов
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.06 "Эксплуатация судового электрооборудования и средств
                автоматики"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.06
                "Эксплуатация судового электрооборудования и средств автоматики"
                Рабочая программа учебной практики Фонд оценочных средств по
                учебной практике Рабочая программа производственной практики
                Фонд оценочных средств по производственной практике Рабочая
                программа преддипломной практики Фонд оценочных средств по
                преддипломной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image12} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств
                автоматики", 2019 года набора
              </td>
              <td>среднее профессиональное образование </td>
              <td>очная</td>
              <td>
                ООП для специальности 26.02.06 "Эксплуатация судового
                электрооборудования и средств автоматики" * ЭЦП
              </td>
              <td>
                Учебный план 26.02.06 "Эксплуатация судового электрооборудования
                и средств автоматики", на базе 9 классов
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.06 "Эксплуатация судового электрооборудования и средств
                автоматики"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.06
                "Эксплуатация судового электрооборудования и средств автоматики"
                Рабочая программа учебной практики Фонд оценочных средств по
                учебной практике Рабочая программа производственной практики
                Фонд оценочных средств по производственной практике Рабочая
                программа преддипломной практики Фонд оценочных средств по
                преддипломной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image13} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств
                автоматики", 2018 года набора
              </td>
              <td>среднее профессиональное образование </td>
              <td>очная</td>
              <td>
                ООП для специальности 26.02.06 "Эксплуатация судового
                электрооборудования и средств автоматики" * ЭЦП
              </td>
              <td>
                Учебный план 26.02.06 "Эксплуатация судового электрооборудования
                и средств автоматики", на базе 9 классов
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.06 "Эксплуатация судового электрооборудования и средств
                автоматики"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.06
                "Эксплуатация судового электрооборудования и средств автоматики"
                Рабочая программа учебной практики Фонд оценочных средств по
                учебной практике Рабочая программа производственной практики
                Фонд оценочных средств по производственной практике Рабочая
                программа преддипломной практики Фонд оценочных средств по
                преддипломной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image14} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств
                автоматики", 2017 года набора
              </td>
              <td>среднее профессиональное образование </td>
              <td>очная</td>
              <td>
                ООП для специальности 26.02.06 "Эксплуатация судового
                электрооборудования и средств автоматики" * ЭЦП
              </td>
              <td>
                Учебный план 26.02.06 "Эксплуатация судового электрооборудования
                и средств автоматики", на базе 9 классов
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.06 "Эксплуатация судового электрооборудования и средств
                автоматики"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.06
                "Эксплуатация судового электрооборудования и средств автоматики"
                Рабочая программа учебной практики Фонд оценочных средств по
                учебной практике Рабочая программа производственной практики
                Фонд оценочных средств по производственной практике Рабочая
                программа преддипломной практики Фонд оценочных средств по
                преддипломной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image15} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.06
                      "Эксплуатация судового электрооборудования и средств
                      автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_EM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.06 "Эксплуатация судового
                      электрооборудования и средств автоматики"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td>среднее профессиональное образование </td>
              <td>заочная</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td>среднее профессиональное образование </td>
              <td>очно-заочная </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                "Эксплуатация судовых энергетических установок", 2020 года
                набора
              </td>
              <td>среднее профессиональное образование</td>
              <td>очная/заочная </td>
              <td>
                ООП для специальности 26.02.05 "Эксплуатация судовых
                энергетических установок"* ЭЦП
              </td>
              <td>
                Учебный план 26.02.05 "Эксплуатация судовых энергетических
                установок" (очная/заочная){" "}
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.05 "Эксплуатация судовых энергетических установок"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.05
                "Эксплуатация судовых энергетических установок" Рабочая
                программа учебной практики Фонд оценочных средств по учебной
                практике Рабочая программа производственной практики Фонд
                оценочных средств по производственной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image16} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_EM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 260206
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_SM}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260206 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                "Эксплуатация судовых энергетических установок", 2019 года
                набора
              </td>
              <td>среднее профессиональное образование</td>
              <td>очная/заочная </td>
              <td>
                ООП для специальности 26.02.05 "Эксплуатация судовых
                энергетических установок"* ЭЦП
              </td>
              <td>
                Учебный план 26.02.05 "Эксплуатация судовых энергетических
                установок" (очная/заочная){" "}
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.05 "Эксплуатация судовых энергетических установок"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.05
                "Эксплуатация судовых энергетических установок" Рабочая
                программа учебной практики Фонд оценочных средств по учебной
                практике Рабочая программа производственной практики Фонд
                оценочных средств по производственной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image17} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_EM} target={"_blank"} rel="noreferrer">
                      Программа итоговой аттестации для специальности 260205
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_SM} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260205 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                "Эксплуатация судовых энергетических установок" 2018 набора
              </td>
              <td>среднее профессиональное образование</td>
              <td>очная/заочная </td>
              <td>
                ООП для специальности 26.02.05 "Эксплуатация судовых
                энергетических установок"* ЭЦП
              </td>
              <td>
                Учебный план 26.02.05 "Эксплуатация судовых энергетических
                установок", на базе 9 классов, очная, на базе 11 классов,
                заочная
              </td>
              <td>
                Аннотации рабочим программам дисциплин для специальности СПО
                26.02.05 "Эксплуатация судовых энергетических установок"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.05
                "Эксплуатация судовых энергетических установок" Рабочая
                программа учебной практики Фонд оценочных средств по учебной
                практике Рабочая программа производственной практики Фонд
                оценочных средств по производственной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image18} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", на базе 9
                      классов, очная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image19} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", на базе
                      11 классов, заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_EM} target={"_blank"} rel="noreferrer">
                      Программа итоговой аттестации для специальности 260205
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_SM} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260205 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>
                "Эксплуатация судовых энергетических установок", 2016, 2017
                годов набора
              </td>
              <td>среднее профессиональное образование</td>
              <td>очная/заочная </td>
              <td>
                ООП для специальности 26.02.05 "Эксплуатация судовых
                энергетических установок", очная * ЭЦП
              </td>
              <td>
                Учебный план 26.02.05 "Эксплуатация судовых энергетических
                установок" (очная) Учебный план 26.02.05 "Эксплуатация судовых
                энергетических установок" (заочная)
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.05 "Эксплуатация судовых энергетических установок"
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.05
                "Эксплуатация судовых энергетических установок" Рабочая
                программа учебной практики Фонд оценочных средств по учебной
                практике Рабочая программа производственной практики Фонд
                оценочных средств по производственной практике Рабочая программа
                учебной практики, заочная Рабочая программа производственной
                практики, заочная
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image20} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", очная
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image21} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 26.02.05
                      "Эксплуатация судовых энергетических установок", заочная
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_SM} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 26.02.05 "Эксплуатация судовых
                      энергетических установок"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_EM} target={"_blank"} rel="noreferrer">
                      Программа итоговой аттестации для специальности 260205
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_SM} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 260205 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>26.02.05 </td>
              <td>"Эксплуатация судовых энергетических установок"</td>
              <td>среднее профессиональное образование</td>
              <td>очная-заочная </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>23.02.01</td>
              <td>
                "Организация перевозок и управление на транспорте", 2020 года
                набора
              </td>
              <td>среднее профессиональное образование</td>
              <td>очная/заочная </td>
              <td>
                Описание образовательной программы 23.02.01 "Организация
                перевозок и управление на транспорте"* ЭЦП
              </td>
              <td>
                Учебный план 23.02.01 "Организация перевозок и управление на
                транспорте"
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                23.02.01 "Организация перевозок и управление на транспорте"
              </td>
              <td>
                Аннотации и рабочие программы дисциплин для специальности СПО
                23.02.01 "Организация перевозок и управление на транспорте"
                Рабочая программа учебной практики Фонд оценочных средств по
                учебной практике Рабочая программа производственной практики
                Фонд оценочных средств по производственной практике Рабочая
                программа преддипломной практики Фонд оценочных средств по
                преддипломной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image22} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 23.02.01
                      "Организация и управление на транспорте" (по видам)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_OP} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 23.02.01 "Организация перевозок и
                      управление на транспорте (по видам)"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_OP}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 230201
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_OP} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 230201 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>23.02.01</td>
              <td>"Организация перевозок и управление на транспорте"</td>
              <td>среднее профессиональное образование</td>
              <td>заочная</td>
              <td>
                Описание образовательной программы 23.02.01 "Организация
                перевозок и управление на транспорте" ЭЦП
              </td>
              <td>
                Учебный план 23.02.01 "Организация перевозок и управление на
                транспорте"
              </td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                23.02.01 "Организация перевозок и управление на транспорте"
              </td>
              <td>
                Аннотации и рабочие программы дисциплин для специальности СПО
                23.02.01 "Организация перевозок и управление на транспорте"
                Рабочая программа учебной практики Фонд оценочных средств по
                учебной практике Рабочая программа производственной практики
                Фонд оценочных средств по производственной практике Рабочая
                программа преддипломной практики Фонд оценочных средств по
                преддипломной практике
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Image23} target={"_blank"} rel="noreferrer">
                      Календарный учебный график для специальности 23.02.01
                      "Организация и управление на транспорте" (по видам)
                      (заочная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={RPV_OP} target={"_blank"} rel="noreferrer">
                      Рабочая программа воспитания по направлению подготовки
                      (специальности) 23.02.01 "Организация перевозок и
                      управление на транспорте (по видам)"
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_attest_vipusk}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об итоговой аттестации выпускников
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologenie_OOP} target={"_blank"} rel="noreferrer">
                      Положение об основной образовательной программе
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Programma_IA_OP}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Программа итоговой аттестации для специальности 230201
                      "Судовождение" (углубленная)
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={FOS_IA_OP} target={"_blank"} rel="noreferrer">
                      Фонды оценочных средств итоговой аттестации для
                      специальности 230201 "Судовождение" (углубленная)
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        * Информация по реализуемым общеобразовательным программам: программа
        основного общего образования является частью Основных профессиональных
        образовательных программ СПО по специальностям
      </TableWrapper>

      <TableWrapper title="Информация по адаптированным образовательным программам:">
        {" "}
        <table>
          <tbody>
            <tr>
              <td>Код</td>
              <td>
                Наименование специальности, направления подготовки, шифр и
                наименование области науки, научной специальности
              </td>
              <td>
                Уровень образования: 1) высшее образование -бакалавриат; 2)
                высшее образование - специалитет; 3) высшее образование -
                магистратура; 4) высшее образование - подготовка кадров высшей
                квалификации; 5) среднее профессиональное образование
              </td>
              <td>
                Реализуемые формы обучения: 1) очная; 2) очно-заочная; 3)
                заочная
              </td>
              <td>
                Ссылка на описание образовательной программы с приложением ее
                копии
              </td>
              <td>Ссылка на учебный план</td>
              <td>
                Ссылка на аннотации к рабочим программам дисциплин (по каждой
                дисциплине в составе образовательной программы)
              </td>
              <td>Ссылка на календарный учебный график</td>
              <td>Ссылка на рабочие программы воспитания</td>
              <td>
                Ссылка на{" "}
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={KPV} target={"_blank"} rel="noreferrer">
                      Календарный план воспитательной работы
                    </a>
                  </li>
                </ul>
              </td>
              <td>
                Ссылка на методические и иные документы, разработанные
                образовательной организацией для обеспечения образовательного
                процесса
              </td>
              <td>
                Использование при реализации образовательных программ
                электронного обучения и дистанционных образовательных технологий
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - бакалавриат</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>высшее образование - специалитет</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td> высшее образование - магистратура</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
                высшее образование - подготовка кадров высшей квалификации
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>26.02.03</td>
              <td>
                Судовождение (углубленная подготовка), на базе основного общего
                образования (9 классов),
              </td>
              <td>среднее профессиональное образование</td>
              <td>очная</td>
              <td>
                Адаптированная ООП для специальности 26.02.03 "Судовождение" на
                базе 9 классов*
              </td>
              <td>Учебный план 26.02.03 "Судовождение"</td>
              <td>
                Аннотации к рабочим программам дисциплин для специальности СПО
                26.02.03 "Судовождение"
              </td>
              <td>
                Календарный учебный график для специальности 26.02.03
                "Судовождение" (на базе 9 классов)
              </td>
              <td>
                Рабочие программы дисциплин для специальности СПО 26.02.03
                "Судовождение" Рабочая программа учебной практики, (очная) ФОС
                учебной практики (очная) Рабочая программа производственной
                практики, (очная) ФОС производственной практики (очная) Рабочая
                программа производственной практики, (заочная) Рабочая программа
                учебной практики (заочная)
              </td>
              <td>-</td>
              <td>
                Положение об организации учебного процесса для инвалидов и лиц с
                ограниченными возможностями здоровья Положение о порядке
                проведения и объеме учебных занятий по физической культуре
                очно-заочной, заочной формам обучения, а также для студентов
                инвалидов и лиц с ограниченными возможностями здоровья Программа
                итоговой аттестации для специальности 260203 "Судовождение"
                (углубленная) ЭЦП Фонды оценочных средств итоговой аттестации
                для специальности 260203 "Судовождение" (углубленная ЭЦП
              </td>
              <td>
                <ul>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a href={Pologhenie_DO} target={"_blank"} rel="noreferrer">
                      Положение о дистанционном обучении
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologenie_Parus}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о создании электронных учебных курсов в системе
                      дистанционного обучения "Парус"
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_kontrolDO}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение о текущем контроле и промежуточной аттестации
                      обучающихся с применением дистанционных образовательных
                      технологий
                    </a>
                  </li>
                  <li itemProp="ustavDocLink" className="doc__item">
                    <PDF height={"25px"} width={"25px"} />
                    <a
                      href={Pologhenie_EL_Sreda}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Положение об электронной информационно-образовательной
                      среде
                    </a>
                  </li>
                </ul>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>

      <TableWrapper
        title=" Информация о направлениях и результатах научной
        (научно-исследовательской) деятельности:"
      >
        {" "}
        <table>
          <tbody>
            <tr>
              <td>Код</td>
              <td>Наименование специальности/ направления подготовки </td>
              <td>Уровень образования</td>
              <td>
                Перечень научных направлений, в рамках которых ведется научная
                (научно-исследовательская) деятельность
              </td>
              <td>
                Результаты научной (научно-исследовательской) деятельности
              </td>
              <td>
                Сведения о научно-исследовательской базе для осуществления
                научной (научно-исследовательской) деятельности
              </td>
            </tr>
            <tr>
              <td>26.02.03</td>
              <td>Судовождение</td>
              <td>среднее профессиональное образование</td>
              <td rowSpan="4">
                Инновационные технологии в преподавании дисциплин;
                Компетентностный подход в системе СПО
              </td>
              <td rowSpan="4">
                Публикация статей в сборник ежегодной НПК преподавателей филиала
                «Инновационные технологии в преподавании дисциплин»; Участие в
                работе НПК, в том числе международного уровня (свыше 20
                публикаций); Защита кандидатской диссертации, публикация
                монографии; Участие в работе РУМО УГС 26.00.00; РУМО
                преподавателей БЖД и ОБЖ; Руководство исследовательской
                деятельностью курсантов – участников предметных и
                профессиональных олимпиад, конкурсов проф.мастерства
              </td>
              <td rowSpan="4">
                Научно-образовательный портал Znanium (new.znanium.com)
                Электронно-библиотечная система "Лань" Электронная библиотечная
                система «Юрайт» biblio-online.ru Система дистанционного обучения
                «Парус» Комплект лицензионного программного обеспечения: •
                Операционные системы Windows XP, Windows 10, Windows 7 •
                Прикладные пакеты MS Office 2007; MS Office 2013 • Прикладные
                пакеты 1c:8.0, 1C:8.2, 1C:7.7; • Прикладные пакеты Finereader 7;
                • Прикладные пакеты Консультант плюс; • Прикладные пакеты
                WinRar; • Средства проектирования и разработки платформа 1С •
                Конфигурация 1С: АСУ Учебный процесс Компьютерная служба
                Компьютерный сервер Система видеоконференцсвязи Центр
                коллективного пользования информационным и коммуникационным
                оборудованием (компьютерные классы) Локальная сеть филиала
                Научно-образовательный центр (библиотека) Кабинет основ
                исследовательской деятельности Аудитория для проведения круглых
                столов, научных семинаров (музей им.В. Альбанова, каб.20)
              </td>
            </tr>
            <tr>
              <td>26.02.05</td>
              <td>Эксплуатация судовых энергетических установок</td>
              <td>среднее профессиональное образование</td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                Эксплуатация судового электрооборудования и средств автоматики
              </td>
              <td>среднее профессиональное образование</td>
            </tr>
            <tr>
              <td>26.02.01</td>
              <td>
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td>среднее профессиональное образование</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>

      <ul>
        <a href={"Ustav"} target={"_blank"} rel="noreferrer">
          <li
            className="doc__item active__link"
            style={{ backgroundColor: "red" }}
          >
            Направления и результаты научной (научно-исследовательской)
            деятельности и научно-исследовательская база для ее осуществления
          </li>
        </a>
      </ul>
    </div>
  );
});
export default Education;
