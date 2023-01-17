import React from "react";
const EduStandarts = () => {
  return (
    <div className="common__container">
      <h1 className="common__container-title title">
        Образовательные стандарты и требования
      </h1>
      <h3 className="common__container-title title">
        Федеральные государственные образовательные стандарты среднего
        профессионального образования (ФГОС СПО) III + поколения
      </h3>
      <table className="">
        <tbody>
          <tr>
            <td>Стандарт образовательной программы</td>
            <td>Дисциплины и модули</td>
          </tr>
          <tr>
            <td>
              <ul>
                <a href={"Ustav"} target={"_blank"} rel="noreferrer">
                  <li className="doc__item active__link">
                    ФГОС 26.02.03 Судовождение от 07.05.2014 № 441
                  </li>
                </a>
                <a href={"UstavChange1415"} target={"_blank"} rel="noreferrer">
                  <li className="doc__item active__link">
                    ФГОС 26.02.03 Судовождение от 02.12.2020 № 691
                  </li>
                </a>
              </ul>
            </td>
            <td> 26.02.03</td>
          </tr>
          <tr>
            <td>
              <ul>
                <a href={"Ustav"} target={"_blank"} rel="noreferrer">
                  <li className="doc__item active__link">
                    ФГОС 26.02.05 Эксплуатация судовых энергетических установок
                    от 07.05.2014 № 443
                  </li>
                </a>
                <a href={"UstavChange1415"} target={"_blank"} rel="noreferrer">
                  <li className="doc__item active__link">
                    ФГОС 26.02.05 Эксплуатация судовых энергетических установок
                    от 26.11.2020 № 674
                  </li>
                </a>
              </ul>
            </td>
            <td> 26.02.05</td>
          </tr>
          <tr>
            <td>
              <ul>
                <a href={"Ustav"} target={"_blank"} rel="noreferrer">
                  <li className="doc__item active__link">
                    ФГОС 26.02.06 Эксплуатация судового электрооборудования и
                    средств автоматики от 07.05.2014 № 444
                  </li>
                </a>
                <a href={"UstavChange1415"} target={"_blank"} rel="noreferrer">
                  <li className="doc__item active__link">
                    ФГОС 26.02.06 Эксплуатация судового электрооборудования и
                    средств автоматики от 26.11.2020 № 675
                  </li>
                </a>
              </ul>
            </td>
            <td> 26.02.06</td>
          </tr>
          <tr>
            <td>
              <ul>
                <a href={"Ustav"} target={"_blank"} rel="noreferrer">
                  <li className="doc__item active__link">
                    ФГОС 23.02.01 Организация перевозок и управление на
                    транспорте (по видам) от 22.04.2014 № 376
                  </li>
                </a>
              </ul>
            </td>
            <td>23.02.01</td>
          </tr>
        </tbody>
      </table>
      <h3 className="common__container-title title">
        Образовательные стандарты не разрабатываются и не реализуются.
      </h3>
    </div>
  );
};
export default EduStandarts;
