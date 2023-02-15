import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
const Struct = observer(() => {
  return (
    <div
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      <h1
        itemProp="structOrgUprav"
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Структура и органы управления Уфимского филиала ФГБОУ ВО "ВГУВТ"
      </h1>
      <div className="common__container scroll-table">
        <table>
          <tbody>
            <tr>
              <td itemProp="name">
                Наименование органа управления/ структурного подразделения{" "}
              </td>
              <td itemProp="fio">
                ФИО руководителя структурного подразделения
              </td>
              <td itemProp="post">
                Должность руководителя структурного подразделения
              </td>
              <td itemProp="addressStr">
                Адрес местонахождения структурного подразделения
              </td>
              <td itemProp="site">
                Адрес официального сайта структурного подразделения
              </td>
              <td itemProp="email">
                Адреса электронной почты структурного подразделения
              </td>
              <td itemProp="divisionClauseDocLink">
                Положение об органе управления/ о структурном подразделении
              </td>
            </tr>
            <tr>
              <td colSpan="7">
                <h3 className="struct-title">
                  Органы управления образовательной организации:
                </h3>
              </td>
            </tr>
            <tr>
              <td>Уфимский филиал </td>
              <td>Ахмадеева Фарида Шариповна</td>
              <td>директор</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>www.rivercollege.ru</td>
              <td>ukru@ufanet.ru</td>
              <td>Положение о филиале</td>
            </tr>
            <tr>
              <td className="struct-title" colSpan="7">
                Структурные подразделения образовательной организации:
              </td>
            </tr>
            <tr>
              <td>Подразделение учебной работы </td>
              <td>Мусина Гульфия Ириковна </td>
              <td>Заместитель директора филиала </td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275{" "}
              </td>
              <td>www.rivercollege.ru/kursant.htm</td>
              <td>gim_gim@mail.ru</td>
              <td>Положение о подразделении учебной работы ЭЦП</td>
            </tr>
            <tr>
              <td>Подразделение воспитательной работы </td>
              <td>Акбашева Альбина Галимзяновна </td>
              <td>Заместитель директора филиала </td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275{" "}
              </td>
              <td>www.rivercollege.ru/vospit.htm</td>
              <td>anelya.ufa@mail.ru</td>
              <td>Положение о подразделении учебной работы ЭЦП</td>
            </tr>
            <tr>
              <td>Центр организационно-правовой работы</td>
              <td></td>
              <td></td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>www.rivercollege.ru/opr.htm</td>
              <td></td>
              <td>Положение о подразделении учебной работы ЭЦП</td>
            </tr>
            <tr>
              <td>Административно-хозяйственный отдел</td>
              <td>Самушия Автандил Давидович</td>
              <td>Начальник административно-хозяйственного отдела</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>www.rivercollege.ru</td>
              <td>rechflotufa@mail.ru</td>
              <td>Положение о подразделении учебной работы ЭЦП</td>
            </tr>
            <tr>
              <td>Бухгалтерия</td>
              <td> Жоссан Елена Евгеньевна</td>
              <td>Главный бухгалтер</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>www.rivercollege.ru/bookkeeping.htm</td>
              <td>buh-ukru@ufanet.ru</td>
              <td>Положение о подразделении учебной работы ЭЦП</td>
            </tr>
            <tr>
              <td>Отдел коллективного питания</td>
              <td>Макулова Зиля Шамиловна</td>
              <td>Заведующий производством</td>
              <td>
                450017, Приволжский ФО, Республика Башкортостан, г. Уфа, ул.
                Ахметова, 275
              </td>
              <td>www.rivercollege.ru/feeding.htm</td>
              <td>ukru@ufanet.ru</td>
              <td>Положение о подразделении учебной работы ЭЦП</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});
export default Struct;
