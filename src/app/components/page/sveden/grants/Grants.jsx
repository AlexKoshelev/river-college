import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
const Grants = observer(() => {
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
        Стипендии и меры поддержки обучающихся
      </h1>
      <p>
        Виды стипендий, выплачиваемых обучающимся Уфимского филиала ФГБОУ ВО
        «ВГУВТ»:
      </p>
      <ol>
        <li>Государственная академическая</li>
        <li>Социальная стипендия</li>
        <li>Стипендия Правительства Республики Башкортостан</li>
      </ol>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о наличии и условиях предоставления обучающимся стипендий, о
        мерах социальной поддержки обучающихся
      </h3>
      <ul>
        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Протокол заседания стипендиальной комиссии № 1 от 26.09.2022 об
            установлении размера стипендий
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Приказ "О назначении стипендиальной комиссии" № 527-УФСПО-06 от
            23.09.2022 г
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Положение о стипендиальном обеспечении и других формах материальной
            поддержки студентов и аспирантов
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Постановление Правительства РФ от 17.12.2016 г. № 1390 "О
            ФОРМИРОВАНИИ СТИПЕНДИАЛЬНОГО ФОНДА"
          </a>
        </li>
      </ul>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация об иных видах материальной поддержки обучающихся
      </h3>
      <ul>
        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Иные виды материальной поддержки обучающихся
          </a>
        </li>
      </ul>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о наличии общежития, интерната, в том числе приспособленных
        для использования инвалидами и лицами с ограниченными возможностями
        здоровья
      </h3>
      <p>
        Общежитие филиала приспособлено для использования инвалидами и лицами с
        ограниченными возможностями здоровья: имеются пандусы, поручни, перед
        входом установлена кнопка вызова персонала. Дверные проемы расширенные.
      </p>
      <p>
        На первом этаже 1 комната оборудована для проживания лиц с ОВЗ и (или)
        инвалидов.
      </p>
      <p>
        На первом этаже оборудована 1 аудитория, приспособленная для
        использования инвалидами и лицами с ограниченными возможностями
        здоровья.
      </p>
      <p>
        На первом этаже оборудована комната для приема пищи лицами ограниченными
        возможностями здоровья.
      </p>
      <p>
        Филиал имеет общежитие общей площадью 5978,2 кв.м. на 375 место,
        согласно норм СанПин.
      </p>
      <p>Для иногородних поступающих выделено 132 места.</p>
      <p>
        Количество жилых помещений для иногородних обучающихся - 125, количество
        мест - 375.
      </p>
      <p>Адрес общежития: г.Уфа, ул. Ахметова, 275. </p>
      <div className="scroll-table struct__scrollTable">
        <table>
          <tbody>
            <tr>
              <td>Наименование показателя</td>
              <td>Общежития</td>
              <td>Интернаты</td>
            </tr>
            <tr>
              <td>Количество общежитий, интернатов </td>
              <td>1</td>
              <td>нет</td>
            </tr>
            <tr>
              <td>Общая площадь</td>
              <td>5978,2</td>
              <td>нет</td>
            </tr>
            <tr>
              <td>Жилая площадь</td>
              <td>2265,3</td>
              <td>нет</td>
            </tr>
            <tr>
              <td>Количество мест</td>
              <td>375</td>
              <td>нет</td>
            </tr>
            <tr>
              <td>
                Обеспеченность общежитий, интернатов 100% мягким и жестким
                инвентарем по установленным стандартным нормам
              </td>
              <td>100%</td>
              <td>нет</td>
            </tr>
            <tr>
              <td>Наличие питания (включая буфеты, столовые) (да/нет)</td>
              <td>помещение для приема пищи +столовая</td>
              <td>нет</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Положение о студенческом общежитии
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Акт проверки общежития
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Сведения о приспособленности общежития для использования инвалидами
            и лицами с ограниченными возможностями здоровья
          </a>
        </li>
      </ul>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Локальные нормативные акты, регламентирующие формирование платы за
        пользование жилым помещением и коммунальные услуги в общежитии
      </h3>
      <ul>
        <li className="doc__item ">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Смета стоимости проживания в общежитии с 01.07.2022
          </a>
        </li>

        <li className="doc__item">
          <a href={"Ustav"} target={"_blank"} rel="noreferrer">
            Договор найма жилого помещения в общежитии
          </a>
        </li>
      </ul>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о трудоустройстве выпускников образовательных организаций
      </h3>
      <TableWrapper>
        <table>
          <tbody>
            <tr>
              <td>Код</td>
              <td>
                Наименование профессии, специальности, направления подготовки
              </td>
              <td colSpan="2">2019 год</td>
              <td colSpan="2">2020 год</td>
              <td colSpan="2">2021 год</td>
              <td colSpan="2">2022 год</td>
            </tr>
            <tr>
              <td>26.02.03</td>
              <td>"Судовождение"</td>
              <td>0</td>
              <td>0</td>
              <td>38</td>
              <td>8</td>
              <td>14</td>
              <td>11</td>
              <td>42</td>
              <td>24</td>
            </tr>
            <tr>
              <td>26.02.05</td>
              <td>"Эксплуатация судовых энергетических установок"</td>
              <td>0</td>
              <td>0</td>
              <td>40</td>
              <td>13</td>
              <td>36</td>
              <td>25</td>
              <td>43</td>
              <td>14</td>
            </tr>
            <tr>
              <td>26.02.06</td>
              <td>
                "Эксплуатация судового электрооборудования и средств автоматики"
              </td>
              <td>0</td>
              <td>0</td>
              <td>26</td>
              <td>13</td>
              <td>22</td>
              <td>11</td>
              <td>27</td>
              <td>19</td>
            </tr>
            <tr>
              <td>23.02.01</td>
              <td>
                Организация перевозок и управление на транспорте (по видам)
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </div>
  );
});
export default Grants;
