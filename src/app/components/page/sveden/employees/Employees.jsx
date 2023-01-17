import React from "react";
const Employees = () => {
  return (
    <div className="common__container">
      <h1 className="common__container-title title">
        Руководство. Педагогический (научно-педагогический) состав
      </h1>
      <h3 className="common__container-title title">
        Информация о руководителе/заместителях руководителя Уфимского филиала
        ФГБОУ ВО "ВГУВТ"
      </h3>
      <div className="scroll-table">
        <table className="">
          <tbody>
            <tr>
              <td>ФИО</td>
              <td>Должность</td>
              <td>Контактные телефоны</td>
              <td>Адреса электронной почты</td>
            </tr>
            <tr>
              <td>Ахмадеева Фарида Шариповна </td>
              <td>Директор </td>
              <td>8 (347) 278-28-83 </td>
              <td> ukru@ufanet.ru</td>
            </tr>
            <tr>
              <td>Мусина Гульфия Ириковна </td>
              <td>Заместитель директора </td>
              <td>8 (347) 278-28-86 </td>
              <td> gim_gim@mail.ru</td>
            </tr>
            <tr>
              <td>Акбашева Альбина Галимзяновна </td>
              <td>Заместитель директора </td>
              <td>8 (347) 278-28-86 </td>
              <td> anelya.ufa@mail.ru</td>
            </tr>
            <tr>
              <td>Жоссан Елена Евгеньевна </td>
              <td>Главный бухгалтер </td>
              <td>8 (347) 278-03-25 </td>
              <td> lenazhossan@mail.ru</td>
            </tr>
            <tr>
              <td></td>
              <td>Начальник центра организационно-правовой работы </td>
              <td>8 (347) 278-28-83, 278-28-86, вн.110 </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="common__container-title title">
        Информация о руководителях филиалов Уфимского филиала ФГБОУ ВО "ВГУВТ"
        (при наличии)
      </h3>
      Уфимский филиал ФГБОУ ВО "ВГУВТ" филиалов не имеет.
      <table className="">
        <tbody>
          <tr>
            <td>Наименование филиала</td>
            <td>-</td>
          </tr>
          <tr>
            <td>ФИО</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Должность</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Контактные телефоны</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Адреса электронной почты</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h3 className="common__container-title title">
        Информация о составе педагогических (научно-педагогических) работников
        Уфимского филиала ФГБОУ ВО "ВГУВТ"
      </h3>
      <ul>
        <a href={"Ustav"} target={"_blank"} rel="noreferrer">
          <li className="doc__item active__link">
            Информация о составе педагогических (научно-педагогических)
            работников Уфимского филиала ФГБОУ ВО "ВГУВТ" ЭЦП
          </li>
        </a>
      </ul>
      <div className="scroll-table"></div>
    </div>
  );
};
export default Employees;
