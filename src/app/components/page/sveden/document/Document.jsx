import React from "react";
import HrLine from "../../../common/hrLine/HrLine";
import Ustav from "../../../../assets/pdf/documentPage/Ustav_2017.pdf";
import UstavChange1415 from "../../../../assets/pdf/documentPage/rasp_ustav_2015.pdf";
import UstavChange17 from "../../../../assets/pdf/documentPage/rasp_ustav_2017.pdf";
import UstavChange18 from "../../../../assets/pdf/documentPage/rasp_ustav_2018.pdf";
import UstavChange19 from "../../../../assets/pdf/documentPage/rasp_ustav_2019.pdf";
import UstavChange21 from "../../../../assets/pdf/documentPage/rasp_ustav_2021.pdf";
import Pologen22 from "../../../../assets/pdf/documentPage/Pologen_2022.pdf";
import Pologen22Dop from "../../../../assets/pdf/documentPage/Pologen_dop.pdf";
import LicenzVip from "../../../../assets/pdf/documentPage/licenz_vip20220916.pdf";

import AkrVsuwt from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019.pdf";
import AkrVsuwtPril1 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril1.pdf";
import AkrVsuwtPril2 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril2.pdf";
import AkrVsuwtPril3 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril3.pdf";
import AkrVsuwtPril4 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril4.pdf";
import AkrVsuwtPril5 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril5.pdf";
import AkrVsuwtPril6 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril6.pdf";
import AkrVsuwtPril9 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril9.pdf";
import AkrVsuwtPril10 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_2019_pril10.pdf";
import AkrVsuwtPril12 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_pril12.pdf";
import AkrVsuwtPril13 from "../../../../assets/pdf/documentPage/Akkr_VSUWT_pril13.pdf";
import Prikaz706 from "../../../../assets/pdf/documentPage/Prikaz706.pdf";
import Prikaz734 from "../../../../assets/pdf/documentPage/Prikaz734.pdf";
import Prikaz950 from "../../../../assets/pdf/documentPage/Prikaz950.pdf";

import Plan_FHD_2021 from "../../../../assets/xlsx/Plan_FHD_2021.xlsx";

import PravPriem from "../../../../assets/pdf/documentPage/pravila_priema_2022.pdf";
import Raspisanie from "../../../../assets/pdf/documentPage/raspisanie.pdf";
import Rezim from "../../../../assets/pdf/documentPage/Rezhim_zanyat_2022-2023.jpg";

import PolozOvz from "../../../../assets/pdf/documentPage/Pologenie_ucheb_prozess_ovz_2017.pdf";
import PolozPromItog from "../../../../assets/pdf/documentPage/Pologenie_promegut_itogov_attest2017.pdf";
import Pologenie_GIA from "../../../../assets/pdf/documentPage/Pologenie_GIA.pdf";
import Perev21 from "../../../../assets/pdf/documentPage/Perevod_UF_2021.pdf";
import Otchisl21 from "../../../../assets/pdf/documentPage/Otchisl_UF_2021.pdf";

import Otchisl17 from "../../../../assets/pdf/documentPage/Otnoshenie_2017.pdf";
import Raspor18 from "../../../../assets/pdf/documentPage/pravila_rasporyadka_2018.pdf";
import TrudRasp17 from "../../../../assets/pdf/documentPage/Pravila_trud_rasporyadka_2017.pdf";
import KolDogov from "../../../../assets/pdf/documentPage/Kol_dogovor_2017.pdf";
import KolDogovPril from "../../../../assets/pdf/documentPage/Pril_kol_dogovor_2017.pdf";
import KolDogovDop from "../../../../assets/pdf/documentPage/kol_dogovor_dop.pdf";
import SamoobsOrchet19 from "../../../../assets/pdf/documentPage/othet_o_samoobsledovanii_2019.pdf";
import SamoobsOrchet20 from "../../../../assets/pdf/documentPage/othet_o_samoobsledovanii_2020.pdf";
import SamoobsOrchet21 from "../../../../assets/pdf/documentPage/othet_o_samoobsledovanii_2021.pdf";

import PoryadPlatnUslug from "../../../../assets/pdf/documentPage/Poryadok_platn_uslug.pdf";
import PoryadPlatnObrUslug21 from "../../../../assets/pdf/documentPage/Dogovor_platn_obraz_uslug_2021.pdf";
import StoimObuch22 from "../../../../assets/pdf/documentPage/Stoimost_obuch_2022.pdf";
import OplProzivan20 from "../../../../assets/pdf/documentPage/Poryadok_oplatu_za_progivanie_2020.pdf";
import OplProzivan from "../../../../assets/pdf/documentPage/Poryadok_oplatu_za_progivanie.pdf";
import PolStDorm18 from "../../../../assets/pdf/documentPage/Pol_st_dorm_2018.pdf";
import Predpis from "../../../../assets/pdf/documentPage/predpisanie_transp_prok1.pdf";
import PismoTransp from "../../../../assets/pdf/documentPage/pismo_transp_prok_2020.pdf";

import Pismo_pozh from "../../../../assets/pdf/documentPage/pismo_pozh.pdf";
import Zakl_pozh2 from "../../../../assets/pdf/documentPage/zakl_pozh_2.pdf";
import Zakl_pozh3 from "../../../../assets/pdf/documentPage/zakl_pozh_3.pdf";
import ZaklSanitar1 from "../../../../assets/pdf/documentPage/zakl_sanitar_1.pdf";
import ZaklSanitar2 from "../../../../assets/pdf/documentPage/zakl_sanitar_2.pdf";
import ZaklSanitar3 from "../../../../assets/pdf/documentPage/zakl_sanitar_3.pdf";
import ZaklSanitar4 from "../../../../assets/pdf/documentPage/zakl_sanitar_4.pdf";
import ZaklSanitar5 from "../../../../assets/pdf/documentPage/zakl_sanitar_5.pdf";
import DoDop from "../../../../assets/pdf/documentPage/DO_dop.pdf";
import PolozPd from "../../../../assets/pdf/documentPage/Pologenie_PD.pdf";
import DropDown from "../../../common/dropDown/DropDown";

const Document = () => {
  return (
    <div className="common__container">
      <h1 className="common__container-title title">Документы</h1>
      <HrLine className="document__hrLine" />
      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Документы"}
      >
        <ul>
          <a href={Ustav} target={"_blank"} rel="noreferrer">
            <li itemProp="ustavDocLink" className="doc__item active__link">
              Устав
            </li>
          </a>
          <a href={UstavChange1415} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Распоряжения о внесении изменений в Устав 2014,2015
            </li>
          </a>
          <a href={UstavChange17} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Распоряжения о внесении изменений в Устав 2017
            </li>
          </a>
          <a href={UstavChange18} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Распоряжение в внесении изменений в Устав 2018
            </li>
          </a>
          <a href={UstavChange19} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Распоряжение в внесении изменений в Устав 2019 - №ЮЦ-55-р от
              04.03.19
            </li>
          </a>
          <a href={UstavChange21} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Распоряжение о внесении изменений в Устав 2021 - №АЛ-344-р от
              11.08.2021
            </li>
          </a>
          <a href={Pologen22} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">Положение о филиале </li>
          </a>
          <a href={Pologen22Dop} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Изменения в Положение о филиале (приказ №42 от 01.04.2022)
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Аккредитация"}
      >
        <ul>
          <a href={LicenzVip} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Выписка из реестра лицензий Федеральной службы по надзору в сфере
              образования и науки (16.09.2022)
            </li>
          </a>
        </ul>
        <HrLine className="document__hrLine" />

        <ul>
          <a href={AkrVsuwt} target={"_blank"} rel="noreferrer">
            <li
              itemProp="accreditationDocLink"
              className="doc__item active__link"
            >
              Свидетельство о государственной аккредитации № 2998 от 27.02.2019
              (ВГУВТ)
            </li>
          </a>
          <a href={AkrVsuwtPril1} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №1 к свидетельству о государственной аккредитации
              (ВГУВТ)
            </li>
          </a>
          <a href={AkrVsuwtPril2} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №2 к свидетельству о государственной аккредитации
              (Казанский филиал)
            </li>
          </a>
          <a href={AkrVsuwtPril3} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №3 к свидетельству о государственной аккредитации
              (Каспийский институт морского и речного транспорта, филиал ВГУВТ)
            </li>
          </a>
          <a href={AkrVsuwtPril4} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №4 к свидетельству о государственной аккредитации
              (Пермский филиал)
            </li>
          </a>
          <a href={AkrVsuwtPril5} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №5 к свидетельству о государственной аккредитации
              (Рыбинский филиал)
            </li>
          </a>
          <a href={AkrVsuwtPril6} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №6 к свидетельству о государственной аккредитации
              (Уфимский филиал)
            </li>
          </a>
          <a href={AkrVsuwtPril9} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №9 к свидетельству о государственной аккредитации
              (Магистратура ВГУВТ, Юриспруденция)
            </li>
          </a>
          <a href={AkrVsuwtPril10} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №10 к свидетельству о государственной аккредитации
              (Уфимский филиал, ОП)
            </li>
          </a>
          <a href={AkrVsuwtPril12} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №12 к свидетельству о государственной аккредитации
              (ВГУВТ)
            </li>
          </a>
          <a href={AkrVsuwtPril13} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение №13 к свидетельству о государственной аккредитации
              (Пермский филиал)
            </li>
          </a>
          <a href={Prikaz706} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приказ Рособрнадзора №706 от 29.06.2020 "О переоформлении
              свидетельства о государственной аккредитации образовательной
              деятельности ФГБОУ ВО "ВГУВТ"
            </li>
          </a>
          <a href={Prikaz734} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приказ Рособрнадзора №734 от 28.05.2021 "О переоформлении
              свидетельства о государственной аккредитации образовательной
              деятельности ФГБОУ ВО "ВГУВТ"
            </li>
          </a>
          <a href={Prikaz950} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приказ Рособрнадзора №950 от 09.07.2021 "О переоформлении
              свидетельства о государственной аккредитации образовательной
              деятельности ФГБОУ ВО "ВГУВТ"
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"План финансово-хозяйственной деятельности, расписание"}
      >
        <ul>
          <a href={Plan_FHD_2021} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              План финансово-хозяйственной деятельности
            </li>
          </a>
        </ul>
        <HrLine className="document__hrLine" />
        <ul>
          <a href={PravPriem} target={"_blank"} rel="noreferrer">
            <li itemProp="priemDocLink" className="doc__item active__link">
              Правила приема обучающихся
            </li>
          </a>
          <a href={Raspisanie} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Расписание учебных занятий ЭЦП
            </li>
          </a>
          <a href={Rezim} target={"_blank"} rel="noreferrer">
            <li itemProp="modeDocLink" className="doc__item active__link">
              Режим занятий обучающихся ЭЦП
            </li>
          </a>
        </ul>
      </DropDown>
      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Контроля успеваемости и промежуточная аттестация"}
      >
        <h3 className="common__container-title title">
          Документы, регламентирующие формы, периодичность и порядок текущего
          контроля успеваемости и промежуточной аттестации обучающихся
        </h3>
        <HrLine className="document__hrLine" />
        <ul>
          <a href={PolozOvz} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Положение об организации учебного процесса для инвалидов и лиц с
              ограниченными возможностями здоровья
            </li>
          </a>
          <a href={PolozPromItog} target={"_blank"} rel="noreferrer">
            <li itemProp="tekKontrolDocLink" className="doc__item active__link">
              Положение о проведении текущего контроля и промежуточной
              аттестации обучающихся
            </li>
          </a>
          <a href={Pologenie_GIA} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Положение об итоговой аттестации выпускников
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Перевод и восстановление"}
      >
        <ul>
          <a href={Perev21} target={"_blank"} rel="noreferrer">
            <li itemProp="perevodDocLink" className="doc__item active__link">
              Положение о переводе и восстановлении обучающихся
            </li>
          </a>
          <a href={Otchisl21} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Положение об отчислении обучающихся
            </li>
          </a>
          <a href={"/"} target={"_blank"} rel="noreferrer">
            <li
              style={{ backgroundColor: "red" }}
              className="doc__item active__link"
            >
              {console.log("Исправь ссылку")}
              Информация о результатах перевода, восстановления и отчисления
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Правила, договоры"}
      >
        <ul>
          <a href={Otchisl17} target={"_blank"} rel="noreferrer">
            <li itemProp="vozDocLink" className="doc__item active__link">
              Порядок оформления возникновения, приостановления и прекращения
              отношений между образовательной организацией и обучающимися и
              (или) родителями (законными представителями) несовершеннолетних
              обучающихся
            </li>
          </a>
        </ul>
        <HrLine className="document__hrLine" />
        <ul>
          <a href={Raspor18} target={"_blank"} rel="noreferrer">
            <li itemProp="localActStud" className="doc__item active__link">
              Правила внутреннего распорядка обучающихся
            </li>
          </a>
          <a href={TrudRasp17} target={"_blank"} rel="noreferrer">
            <li itemProp="localActOrder" className="doc__item active__link">
              Правила внутреннего трудового распорядка
            </li>
          </a>
        </ul>
        <HrLine className="document__hrLine" />
        <ul>
          <a href={KolDogov} target={"_blank"} rel="noreferrer">
            <li itemProp="localActCollec" className="doc__item active__link">
              Коллективный договор
            </li>
          </a>
          <a href={KolDogovPril} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Приложение к коллективному договору
            </li>
          </a>
          <a href={KolDogovDop} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Доп соглашение к коллективному договору
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Отчеты"}
      >
        <ul>
          <a href={SamoobsOrchet19} target={"_blank"} rel="noreferrer">
            <li itemProp="reportEduDocLink" className="doc__item active__link">
              Отчет о результатах самообследования Уфимского филиала ФГБОУ ВО
              "ВГУВТ" за 2019 год
            </li>
          </a>
          <a href={SamoobsOrchet20} target={"_blank"} rel="noreferrer">
            <li itemProp="reportEduDocLink" className="doc__item active__link">
              Отчет о результатах самообследования Уфимского филиала ФГБОУ ВО
              "ВГУВТ" за 2020 год ЭЦП
            </li>
          </a>
          <a href={SamoobsOrchet21} target={"_blank"} rel="noreferrer">
            <li itemProp="reportEduDocLink" className="doc__item active__link">
              Отчет о результатах самообследования Уфимского филиала ФГБОУ ВО
              "ВГУВТ" за 2021 год ЭЦП
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Платные услуги"}
      >
        <ul>
          <a href={PoryadPlatnUslug} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Положение об оказании платных образовательных услуг
            </li>
          </a>
          <a href={PoryadPlatnObrUslug21} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Образец договора об оказании платных образовательных услуг
            </li>
          </a>
          <a href={StoimObuch22} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Документ об утверждении стоимости обучения по каждой
              образовательной программе
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Общежитие"}
      >
        <ul>
          <a href={OplProzivan20} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Документ об установлении размера платы, взимаемой с родителей
              (законных представителей) за присмотр и уход за детьми,
              осваивающими образовательные программы дошкольного образования в
              организациях, осуществляющих образовательную деятельность, за
              содержание детей в образовательной организации, реализующей
              образовательные программы начального общего, основного общего или
              среднего общего образования, если в такой образовательной
              организации созданы условия для проживания обучающихся в
              интернате, либо за осуществление присмотра и ухода за детьми в
              группах продленного дня в образовательной организации, реализующей
              образовательные программы начального общего, основного общего или
              среднего общего образования.
            </li>
          </a>
          <a href={OplProzivan} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Смета стоимости проживания в общежитии с 01.07.2022
            </li>
          </a>
          <a href={PolStDorm18} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Положение о студенческом общежитии
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Предписания и отчеты"}
      >
        <h3
          itemProp="prescriptionDocLink"
          className="common__container-title title"
        >
          Предписания органов, осуществляющих государственный контроль в сфере
          образования и отчеты об их исполнении:
        </h3>

        <ul>
          <a href={Predpis} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Предписание Уфимской транспортной прокуратуры № 23/1-5-2020 от
              09.09.2020
            </li>
          </a>
        </ul>
        <HrLine className="document__hrLine" />
        <h3 className="common__container-title title">
          Отчет об исполнении Предписаний:
        </h3>
        <ul>
          <a href={PismoTransp} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Письмо на предписание Уфимской транспортной прокуратуры №
              23/1-5-2020 от 09.09.2020 ЭЦП
            </li>
          </a>
        </ul>
      </DropDown>

      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Письма и заключения"}
      >
        <ul>
          <a href={Pismo_pozh} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Письмо МЧС России № 533-2-4-28 от 17.05.2019
            </li>
          </a>
          <a href={Zakl_pozh2} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Заключение №296/02 о соответствии объекта защиты обязательным
              требованиям пожарной безопасности
            </li>
          </a>
          <a href={Zakl_pozh3} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Заключение №96/02 о соответствии объекта защиты обязательным
              требованиям пожарной безопасности (стадион "Нефтяник")
            </li>
          </a>
          <a href={ZaklSanitar1} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Санитарно-эпидемиологическое заключение на здания, строения,
              сооружения, помещения, оборудование и иное имущество, используемое
              для осуществления образовательной деятельности по программам
              среднего профессионального образования (с приложением) по адресу
              г. Уфа, ул. Ахметова, д. 275
            </li>
          </a>
          <a href={ZaklSanitar2} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Санитарно-эпидемиологическое заключение на здания, строения,
              сооружения, помещения, оборудование и иное имущество, используемое
              для осуществления образовательной деятельности по программам
              дополнительного образования и профессионального обучения
            </li>
          </a>
          <a href={ZaklSanitar3} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Санитарно-эпидемиологическое заключение на здания, строения,
              сооружения, помещения, оборудование и иное имущество, используемое
              для осуществления образовательной деятельности по программам
              среднего профессионального образования по адресу: г. Уфа, ул.
              Комарова, д.9
            </li>
          </a>
          <a href={ZaklSanitar4} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Санитарно-эпидемиологическое заключение на здания, строения,
              сооружения и (или) помещения для осуществления медицинской
              деятельности по адресу г. Уфа, ул. Ахметова, д. 275
            </li>
          </a>
          <a href={ZaklSanitar5} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Санитарно-эпидемиологическое заключение на здания, строения,
              сооружения, помещения, оборудование и иное имущество, используемое
              для осуществления образовательной деятельности по программам
              среднего профессионального образования (с приложением) по адресу
              г. Уфа, ул. Союзная
            </li>
          </a>
        </ul>
      </DropDown>
      <DropDown
        className={"btn-show"}
        classNameActive={"btn-show-active"}
        title={"Дополнительные документы"}
      >
        <h3 className="common__container-title title">
          Дополнительные документы:
        </h3>
        <ul>
          <a href={DoDop} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Положение о порядке применения дистанционных образовательных
              технологий и электронного обучения при реализации программ
              дополнительного образования детей и взрослых, дополнительного
              профессионального образования и профессионального обучения
            </li>
          </a>
          <a href={PolozPd} target={"_blank"} rel="noreferrer">
            <li className="doc__item active__link">
              Положение о защите персональных данных
            </li>
          </a>
        </ul>
      </DropDown>
    </div>
  );
};
export default Document;
