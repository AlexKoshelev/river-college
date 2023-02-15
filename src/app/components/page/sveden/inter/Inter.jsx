import { observer } from "mobx-react-lite";
import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
const Inter = observer(() => {
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
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Международное сотрудничество
      </h1>
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Сведения о заключенных и планируемых к заключению договорах с
        иностранными и (или) международными организациями по вопросам
        образования и науки:
      </h3>
      <table className="">
        <tbody>
          <tr>
            <td>№ п/п</td>
            <td>Государство</td>
            <td>Наименование организации</td>
            <td>
              Реквизиты договора (наименование, дата, номер, срок действия)
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
      <h3
        className={`common__container-title ${toggleClassName(
          "title",
          "title-white",
          "title-black",
          "title-contrast"
        )}`}
      >
        Информация о международной аккредитации
      </h3>
      <table className="">
        <tbody>
          <tr>
            <td>Код </td>
            <td>
              Наименование профессии, специальности, направления подготовки{" "}
            </td>
            <td>
              Срок действия международной аккредитации (дата окончания действия
              свидетельства о международной аккредитации)
            </td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
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
        Информация о заключенных и планируемых к заключению договорах с
        иностранными и (или) международными организациями по вопросам
        образования и науки - договора отсутствуют.
      </h3>
    </div>
  );
});
export default Inter;
