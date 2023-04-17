import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
import { observer } from "mobx-react-lite";
import TableWrapper from "../../../common/tableWrapper/TableWrapper";
const ProfessionalTrainingPrograms = observer(() => {
  return (
    <main className="flex jcc">
      <div
        className={toggleClassName(
          "common__container",
          "common__container-white",
          "common__container-black",
          "common__container-contrast"
        )}
      >
        <section>
          <TableWrapper title={"Перечень программ профессионального обучения"}>
            <table>
              <tbody>
                <tr>
                  <td>№ п/п</td>
                  <td>Наименование программы</td>
                  <td>Количество часов </td>
                  <td>Стоимость руб.</td>
                  <td>Минимальное количество слушателей</td>
                  <td>Количество дней</td>
                  <td>Форма обучения</td>
                  <td>Записаться на курсы</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Программа подготовки рулевого </td>
                  <td>458</td>
                  <td>23200</td>
                  <td>20</td>
                  <td>58</td>
                  <td>
                    очная, с отрывом от производства, или смешанная с
                    использованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Программа подготовки матроса </td>
                  <td>120</td>
                  <td>7700</td>
                  <td>20</td>
                  <td>15</td>
                  <td>
                    очная, с отрывом от производства, или смешанная с
                    использованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Подготовка подготовки моториста</td>
                  <td>454</td>
                  <td>23200</td>
                  <td>15</td>
                  <td>57</td>
                  <td>
                    очная, с отрывом от производства, или смешанная с
                    использованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Программа подготовки моториста-рулевого</td>
                  <td>586</td>
                  <td>32000</td>
                  <td>20</td>
                  <td>74</td>
                  <td>
                    очная, с отрывом от производства, или смешанная с
                    использованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Программа подготовки лебедчика </td>
                  <td>320</td>
                  <td>16000</td>
                  <td>20</td>
                  <td>40</td>
                  <td>
                    очная, с отрывом от производства, или смешанная с
                    использованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Программа подготовки электрика судового </td>
                  <td>390 </td>
                  <td>23200</td>
                  <td>17</td>
                  <td>49</td>
                  <td>
                    очная, с отрывом от производства, или смешанная с
                    использованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Программа подготовки шкипера </td>
                  <td>136</td>
                  <td>17900</td>
                  <td>10</td>
                  <td>17</td>
                  <td>
                    очная с отрывом от производства или очно-заочная с
                    использованием дистанционных образовательных технологий и
                    электронного обучения
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Программа подготовки повара судового </td>
                  <td>175</td>
                  <td>16000</td>
                  <td>15</td>
                  <td>22</td>
                  <td>
                    очная, с отрывом от производства, или смешанная,с
                    спользованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    Программа подготовки сварщика ручной дуговой сварки
                    плавящимся покрытым электродом
                  </td>
                  <td>338</td>
                  <td>26100</td>
                  <td>15</td>
                  <td>43</td>
                  <td>
                    очная, с отрывом от производства, или смешанная,с
                    спользованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Программа подготовки проводника на водном транспорте </td>
                  <td>108</td>
                  <td>8400</td>
                  <td>15</td>
                  <td>14</td>
                  <td>
                    очная, с отрывом от производства, или смешанная,с
                    спользованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Программа подготовки моториста-матроса </td>
                  <td>528</td>
                  <td>27200</td>
                  <td>20</td>
                  <td>66</td>
                  <td>
                    очная, с отрывом от производства, или смешанная,с
                    спользованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Программа подготовки лебедчика-моториста </td>
                  <td>492</td>
                  <td>26300</td>
                  <td>20</td>
                  <td>62</td>
                  <td>
                    очная, с отрывом от производства, или смешанная,с
                    спользованием дистанционных образовательных технологий и
                    электронного обучения и проведением с отрывом от
                    производства практических занятий
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Программа подготовки боцмана</td>
                  <td>40</td>
                  <td>6300</td>
                  <td>10</td>
                  <td>5</td>
                  <td>
                    очная, с отрывом от производства, или смешанная с
                    использованием дистанционных образовательных тех- нологий и
                    электронного обучения
                  </td>
                  <td>
                    Тел.: 8 (347) 278-28-86 Отдел конвенционной подготовки и
                    дополнительного образования okpdo@uf-vsuwt.ru ул.Ахметова,
                    275
                  </td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
        </section>
      </div>
    </main>
  );
});
export default ProfessionalTrainingPrograms;