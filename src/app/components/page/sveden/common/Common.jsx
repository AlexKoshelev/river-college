import { observer } from "mobx-react-lite";
import React from "react";
import BazPraktik from "../../../../assets/pdf/commonPage/baz_praktik.pdf";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";

const Common = observer(() => {
  return (
    <>
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
          История создания и развития
        </h1>
        <p>
          Уфимское речное училище было создано приказом № 89 от 7 августа 1970
          года Министерства речного флота Российской Федерации для обеспечения
          командными кадрами судов Бельского речного пароходства и ЗАО
          Башволготанкер.
        </p>
        <p>
          Распоряжением Правительства Российской Федерации №1550 - р от 30
          сентября 2005 года Уфимское командное речное училище реорганизовано в
          Уфимский филиал Московской Государственной Академии водного
          транспорта. В соответствии с распоряжением Федерального агентства
          морского и речного транспорта (Росморечфлот) № АД-150-р от 26.05.2011
          филиал переименован в Уфимский филиал Федерального бюджетного
          образовательного учреждения высшего профессионального образования
          "Московская государственная академия водного транспорта" (Уфимский
          филиал ФБОУ ВПО «МГАВТ»).
        </p>
        <p>
          Согласно распоряжению Федерального агентства морского и речного
          транспорта (Росморечфлот) № АД-368-р от 22.09.2014 филиал переименован
          в Уфимский филиал Федерального государственного бюджетного
          образовательного учреждения высшего образования "Московская
          государственная академия водного транспорта". В соответствии с
          распоряжением Федерального агентства морского и речного транспорта
          (Росморечфлот) № АД-481-р от 26.12.2014 изменено сокращенное
          наименование филиала – Уфимский филиал ФГБОУ ВО «МГАВТ». Федеральное
          государственное, бюджетное образовательное учреждение высшего
          образования «Московская государственная академия водного транспорта»
          является некоммерческой образовательной организацией высшего
          образования - государственным бюджетным образовательным учреждением
          высшего образования федерального подчинения.
        </p>
        <p>
          На основании распоряжения Федерального агентства морского и речного
          транспорта № ВО-282-Р от 28.11.2016 Уфимский филиал Федерального
          государственного бюджетного образовательного учреждения высшего
          образования «Московская государственная академия водного транспорта»
          реорганизован в Уфимский филиал Федерального государственного
          бюджетного образовательного учреждения высшего образования
          «Государственный университет морского и речного флота имени адмирала
          С.О. Макарова» от 01.02.2017. В соответствии с распоряжением
          Учредителя, от 16.08. 2017 года № АП-193-Р с 01.12.2017 года, на базе
          Уфимского филиала ФГБОУ ВО «ГУМРФ имени адмирала С.О. Макарова»
          образован Уфимский филиал Федерального государственного бюджетного
          образовательного учреждения высшего образования «Волжский
          государственный университет водного транспорта» (Уфимский филиал ФГБОУ
          ВО «ВГУВТ»). Уфимский филиал ФГБОУ ВО «ВГУВТ» является обособленным
          структурным подразделением ФГБОУ ВО «ВГУВТ», расположенным вне места
          его нахождения и осуществляющим постоянно все его функции или их
          часть.
        </p>
        <h1
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Сведения об образовательной организации
        </h1>
        <div className="common__item flex">
          <div className="common__item-header">
            Полное наименование образовательной организации
          </div>
          <div itemProp="fullName" className="common__item-body">
            Уфимский филиал Федерального государственного бюджетного
            образовательного учреждения высшего образования «Волжский
            государственный университет водного транспорта»
          </div>
        </div>
        <div className="common__item flex">
          <div className="common__item-header">
            Сокращенное наименование образовательной организации
          </div>
          <div itemProp="shortName" className="common__item-body">
            Уфимский филиал ФГБОУ ВО "ВГУВТ"
          </div>
        </div>
        <h3
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Основные сведения об образовательной организации
        </h3>
        <div>
          <table className="">
            <tbody>
              <tr>
                <td>Дата создания образовательной организации</td>
                <td itemProp="regDate">07.08.1970</td>
              </tr>
              <tr>
                <td>Адрес местонахождения образовательной организации</td>
                <td itemProp="address">
                  450017, Республика Башкортостан, г. Уфа, ул. Ахметова, д. 275
                </td>
              </tr>
              <tr>
                <td>Филиалы образовательной организации</td>
                <td>отсутствуют</td>
              </tr>
              <tr>
                <td>Представительства образовательной организации</td>
                <td>отсутствуют</td>
              </tr>
              <tr>
                <td>Режим, график работы</td>
                <td itemProp="workTime">
                  08.15 – 17.15 (пн - пт), обеденный перерыв 12.00-13.00 8.30 -
                  13.25 (суббота) - в период обучения
                </td>
              </tr>
              <tr>
                <td>Контактные телефоны</td>
                <td itemProp="telephone">8 (347) 278-28-83 (приемная);</td>
              </tr>
              <tr>
                <td></td>
                <td itemProp="telephone">8 (347) 278-28-86</td>
              </tr>
              <tr>
                <td></td>
                <td itemProp="telephone">8 (347) 278-03-25 (бухгалтерия)</td>
              </tr>
              <tr>
                <td>Адреса электронной почты</td>
                <td itemProp="email">Приемная ukru@ufanet.ru</td>
              </tr>
              <tr>
                <td></td>
                <td itemProp="email">Бухгалтерия buh-ukru@yandex.ru</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Сведения о филиалах (при наличии)
        </h3>
        <table className="">
          <tbody>
            <tr>
              <td>№ п/п</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Наименование филиала</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Адрес места нахождения</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Режим и график работы</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Контактные телефоны</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Электронная почта</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="td__max">
                Адрес официального сайта или страницы филиала в сети "Интернет"
                (при наличии)
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <h3
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Сведения о представительствах (при наличии)
        </h3>

        <table className="">
          <tbody>
            <tr>
              <td>№ п/п</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Наименование филиала</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Адрес места нахождения</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Режим и график работы</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Контактные телефоны</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Электронная почта</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="td__max">
                Адрес официального сайта или страницы филиала в сети "Интернет"
                (при наличии)
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <h3
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Уфимский филиал ФГБОУ ВО "ВГУВТ" филиалов и представительств не имеет,
          в том числе находящихся за пределами Российской Федерации.
        </h3>
        <h3
          itemProp="uchredLaw"
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Информация об учредителе
        </h3>
        <div>
          <table className="">
            <tbody>
              <tr>
                <td>Наименование учредителя</td>
                <td itemProp="nameUchred">
                  Федеральное агентство морского и речного транспорта
                </td>
              </tr>
              <tr>
                <td>Адрес местонахождения учредителя</td>
                <td itemProp="addressUchred">
                  Россия, 125993, Центральный ФО, г. Москва, ул. Петровка, д.
                  3/6
                </td>
              </tr>
              <tr>
                <td>Контактные телефоны</td>
                <td itemProp="telUchred">8(495)626-11-00,</td>
              </tr>
              <tr>
                <td></td>
                <td itemProp="telUchred">8(495)626-10-57</td>
              </tr>
              <tr>
                <td>Адрес электронной почты</td>
                <td itemProp="mailUchred">ud@morflot.ru</td>
              </tr>
              <tr>
                <td>Адрес сайта учредителя в сети "Интернет"</td>
                <td itemProp="websiteUchred">http://morflot.gov.ru/</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3
          itemProp="addressPlace"
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Информация о местах осуществления образовательной деятельности, в том
          числе не указываемых в соответствии с частью 4 статьи 91 Федерального
          закона от 29.12.2012 №273-ФЗ «Об образовании в Российской Федерации» в
          приложении к лицензии (реестре лицензий) на осуществление
          образовательной деятельности
        </h3>
        <div>
          <table className="">
            <tbody>
              <tr>
                <td>
                  № <br />
                  п/п
                </td>
                <td>Наименование объекта</td>
                <td>Адрес места осуществления образовательной деятельности </td>
                <td>
                  Назначение для целей осуществления образовательной
                  деятельности (основная, дополнительная профессиональная
                  программа, основная программа профессионального обучения,
                  сетевая форма реализации образовательных программ, проведение
                  практики, проведение практической подготовки обучающихся,
                  проведение государственной итоговой аттестации)
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td itemProp="addressPlacePodg">Учебный корпус</td>
                <td>
                  450017, Республика Башкортостан, г.Уфа, ул. Ахметова, д. 275
                </td>
                <td>
                  основная, дополнительная профессиональная программа, основная
                  программа профессионального обучения, проведение практической
                  подготовки обучающихся, проведение ГИА
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td> Общежитие</td>
                <td>
                  450017, Республика Башкортостан, г.Уфа, ул. Ахметова, д. 275
                </td>
                <td itemProp="addressPlaceDop">
                  основная, дополнительная профессиональная программа, основная
                  программа профессионального обучения проведение практической
                  подготовки обучающихся, проведение ГИА
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td> Крытая спортивная площадка</td>
                <td> 450017, Республика Башкортостан, г.Уфа, ул. Союзная</td>
                <td>
                  основная профессиональная программа, проведение практической
                  подготовки обучающихся
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td itemProp="addressPlacePodg">
                  Открытый стадион широкого профиля с элементами полосы
                  препятствий
                </td>
                <td>450064, Республика Башкортостан, г.Уфа, ул. Комарова, 9</td>
                <td>
                  основная профессиональная программа, проведение практической
                  подготовки обучающихся
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Базы практики</td>
                <td itemProp="addressPlacePrac">
                  <a
                    className="active__link"
                    href={BazPraktik}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Список баз практик обучающихся
                  </a>
                </td>
                <td>проведение практики</td>
              </tr>
              <tr>
                <td>6</td>
                <td itemProp="addressPlacePrac">Теплоход "Штурман Альбанов"</td>
                <td>г. Уфа</td>
                <td>проведение практики</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3
          className={`common__container-title ${toggleClassName(
            "title",
            "title-white",
            "title-black",
            "title-contrast"
          )}`}
        >
          Федеральное государственное бюджетное образовательное учреждение
          высшего образования «Волжский государственный университет водного
          транспорта» (ФГБОУ ВО «ВГУВТ»)
        </h3>
        <div>
          <table className="">
            <tbody>
              <tr>
                <td>Место нахождения:</td>
                <td>
                  603950, Приволжский ФО, г. Нижний Новгород, ул. Нестерова, 5
                </td>
              </tr>
              <tr>
                <td>Руководитель:</td>
                <td>Кузьмичёв Игорь Константинович</td>
              </tr>
              <tr>
                <td>График работы:</td>
                <td>с 8:00 до 17:00</td>
              </tr>
              <tr>
                <td>Контактные телефоны:</td>
                <td> Приемная комиссия: (831) 419-78-14, (831) 419-79-24</td>
              </tr>
              <tr>
                <td></td>
                <td>Общий отдел: (831) 419-78-58</td>
              </tr>
              <tr>
                <td></td>
                <td>Бухгалтерия: (831) 419-31-79</td>
              </tr>
              <tr>
                <td>Факсы:</td>
                <td>Общий отдел (831) 419-78-58</td>
              </tr>
              <tr>
                <td>Адрес электронной почты: </td>
                <td>Общий отдел: otd_o@vsuwt.ru </td>
              </tr>
              <tr>
                <td>Адрес сайта в сети Интернет:</td>
                <td>http://www.vsuwt.ru </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
});
export default Common;
