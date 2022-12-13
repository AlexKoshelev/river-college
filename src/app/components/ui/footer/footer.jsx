import React from "react";
import "./footer.scss";
/* import { ReactComponent as MuseumLogo } from "../../../assets/svg/museum.svg"; */
import { ReactComponent as RiverUniversityLogo } from "../../../assets/svg/riveruniversityLogo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__vguvt">
          <div className="">ВГУВТ 2022</div>
          <div className="">VKontacte</div>
          {/* <div className="">
            <span className="icon">
              <object>
                <MuseumLogo width="18px" height="18px" />
              </object>
            </span>
            <span className="text__underlined">
              Сведения об образовательной организации
            </span>
          </div> */}
        </div>
        <div className="footer__logo">
          <object>
            <RiverUniversityLogo />
          </object>
        </div>

        <div className="footer__collegeInfo">
          <table class="iksweb">
            <tbody>
              <tr>
                <td>Наш адрес:</td>
                <td></td>
              </tr>
              <tr>
                <td colspan="2">450017,ул. Ахметова, 275,</td>
              </tr>
              <tr>
                <td colspan="2">Уфа, Республика Башкортостан</td>
              </tr>
              <tr>
                <td> Контакты:</td>
                <td></td>
              </tr>
              <tr>
                <td>Тел./факс:</td>
                <td>8(347) 248-28-83</td>
              </tr>
              <tr>
                <td></td>
                <td>278-28-86</td>
              </tr>
              <tr>
                <td>e-mail:</td>
                <td>ukru@ufanet.ru</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
