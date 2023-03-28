import React from "react";
import Logo1 from "../../../../../assets/img/learning/employmentServices/logo1.png";
import Logo2 from "../../../../../assets/img/learning/employmentServices/logo2.png";
import Logo3 from "../../../../../assets/img/learning/employmentServices/logo3.jpg";
import Logo4 from "../../../../../assets/img/learning/employmentServices/logo4.png";
import Logo5 from "../../../../../assets/img/learning/employmentServices/logo5.png";
import Logo6 from "../../../../../assets/img/learning/employmentServices/logo6.jpg";
import Logo7 from "../../../../../assets/img/learning/employmentServices/logo7.png";
import Logo8 from "../../../../../assets/img/learning/employmentServices/logo4.png";
import Image from "../../../../common/image/Image";
import { observer } from "mobx-react-lite";
import { toggleClassName } from "../../../../../utils/disabled";
const VacanciesFrom = observer(() => {
  return (
    <>
      <section>
        <h1>Вакансии от работодателей</h1>
        <p>
          На этой странице Вы можете ознакомиться с вакансиями судоходных
          компаний и береговых предприятий. Вакансии представлены в группах
          социальной сети "Вконтакте", https://vk.com/typical_riverman, а также
          на отдельных страницах Организаций, которые содержат ссылки на главные
          страницы официального сайта организации, на карьерные страницы, а
          также ссылки на дополнительную полезную информацию при
          трудоустройстве. Ниже представлены страницы судоходных компаний, на
          которых Вы можете ознакомится с компанией, с ее флотом и кадровой
          политикой.{" "}
        </p>
      </section>
      <section>
        <h1>ВАКАНСИИ СУДОХОДНЫХ КОМПАНИЙ</h1>

        <h2>Кадровое агентство «Тафф Стафф»</h2>
        <p>
          <a href="https://tough-staff.ru/" target={"_blank"} rel="noreferrer">
            <Image src={Logo1} height={"100px"} className="employment__image" />
          </a>{" "}
          <a
            href="https://tough-staff.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Кадровое агентство «Тафф Стафф»
          </a>{" "}
          занимается разработкой стратегий и тактик карьерного продвижения для
          моряков. Предлагаем только свежие и актуальные вакансии, а также
          оказываем профессиональную помощь в оформлении морских документов и
          виз для моряков. Также мы можем оформить представление на УЛМ и
          мореходную книжку. Мы оказываем квалифицированные услуги, согласно
          мировым стандартам, на законных основаниях. Все услуги предоставляются
          в максимально короткие сроки. Наши специалисты всегда готовы Вас
          проконсультировать.{" "}
        </p>
        <h2>ЗАО СК Башволготанкер</h2>
        <p>
          <a href="http://bashvt.ru/" target={"_blank"} rel="noreferrer">
            <Image src={Logo2} width={"280px"} className="employment__image" />
          </a>{" "}
          Головной офис{" "}
          <a
            href="http://bashvt.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            ЗАО СК Башволготанкер{" "}
          </a>{" "}
          расположен в г. Уфа. Структурные подразделения компании находятся в
          городах: Уфа, Самара, Астрахань, пгт Камское Устье (Республика
          Татарстан), Ростов-на-Дону, Ярославль. В штате компании трудятся
          грамотные, квалифицированные, профессионально подготовленные
          специалисты. Основные грузообразующие центры находятся в портах: Уфа,
          Самара, Сызрань, Саратов. Экспортные перевозки нефтепродуктов
          осуществляются с использованием технологии перевалки груза в пути
          следования с оптимальным использованием судов различного типа и
          грузоподъемности. Доставка экспортных грузов осуществляется до
          пограничных устьевых портов Российской Федерации.{" "}
        </p>
        <h2>ВодоходЪ</h2>
        <p>
          <a href="https://vodohod.com/" target={"_blank"} rel="noreferrer">
            <Image src={Logo3} height={"100px"} className="employment__image" />
          </a>{" "}
          <a
            href="https://vodohod.com/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            ВодоходЪ
          </a>{" "}
          — крупнейший российский оператор речных круизов и туристический
          оператор полного цикла. Мы организуем круизы из Москвы,
          Санкт-Петербурга, Самары, Нижнего Новгорода и Казани по главным рекам
          европейской части России и популярным туристическим маршрутам, а также
          эксклюзивные экспедиционные туры по сибирской реке Енисей по маршруту
          Красноярск - Дудинка. Малый пассажирский флот задействован в
          регулярных пассажирских перевозках в Северо-Западном, Центральном и
          Приволжском федеральных округах.
        </p>
        <h2>АО СК «Волжское пароходство»</h2>
        <p>
          <a
            href="https://www.volgaflot.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Image src={Logo4} height={"100px"} className="employment__image" />
          </a>{" "}
          <a
            href="https://www.volgaflot.com/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Волжское пароходство
          </a>{" "}
          занимает лидирующие позиции на рынке перевозок грузов по европейской
          части России. География деятельности пароходства на ВВП — территории
          Северо-Западного, Центрального, Волжского, Азово-Донского, Камского и
          Бельского бассейнов с выходом в прибрежные воды Балтийского, Черного,
          Каспийского морей. Основные грузопотоки флота «река-море» плавания
          включают морские порты Европы, Ближнего Востока, северной Африки,
          Каспия.{" "}
        </p>
        <h2>Судоходная компания ГАММА (ООО «Речсервис»)</h2>
        <p>
          <a href="https://gama-nn.ru/" target={"_blank"} rel="noreferrer">
            <Image src={Logo5} height={"100px"} className="employment__image" />
          </a>{" "}
          Основной сферой деятельности компании{" "}
          <a
            href="https://gama-nn.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            ГАМА
          </a>{" "}
          являются речные круизы по рекам Волге, Оке, Каме на комфортабельных
          теплоходах «Алдан», «Александр Свешников», «Афанасий Никитин», «Иван
          Кулибин», «Октябрьская революция», «А.С.Попов». На сегодняшний день
          группа компаний «ГАМА» располагает шестью туристическими теплоходами,
          тремя инновационными банкетными теплоходами. Ключевое направление в
          работе компании занимает строительство новых уникальных колесных
          банкетных теплоходов проекта ПКС-40. Первый теплоход «Сура»
          (Н.Новгород) был спущен на воду в 2011 году, в 2014 году открыл
          навигацию второй теплоход - «КолёсовЪ» (Москва), в 2015 году начал
          свою работу третий колесный теплоход «ДоброходЪ».{" "}
        </p>
        <h2>АО «Обь-Иртышское речное пароходство» (АО «ОИРП»)</h2>
        <p>
          <a href="https://oirp.ru/" target={"_blank"} rel="noreferrer">
            <Image src={Logo6} height={"100px"} className="employment__image" />
          </a>{" "}
          <a
            href="https://oirp.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            АО «ОИРП»
          </a>{" "}
          — одно из крупнейших предприятий водного транспорта в Западной и
          Восточной Сибири и единственное в Уральском федеральном округе. В
          настоящее время география деятельности компании простирается от Ямала
          до Каспия. Флот АО «ОИРП» может осуществлять транспортировку
          генеральных грузов от причалов Архангельска, Северодвинска, портов на
          реке Обь до поселков Харасавэй, Бованенково, Сабетта, а также на
          необору­дованные берега полуострова Ямал. В последние годы АО «ОИРП»
          активно перевозит грузы в п.Сабетта, следующих для строительства
          объектов Ямал СПГ.{" "}
        </p>
        <h2>ПАО «Ленское объединенное речное пароходство»</h2>
        <p>
          <a href="http://lorp.ru/" target={"_blank"} rel="noreferrer">
            <Image src={Logo7} width={"280px"} className="employment__image" />
          </a>{" "}
          <a
            href="http://lorp.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            Ленское объединенное речное пароходство
          </a>{" "}
          – флагман водного речного транспорта Якутии и одно из ведущих
          транспортно- производственных предприятий Северо-Востока России.
          Сегодня морской и внутренний водный транспорт это одна из передовых
          отраслей экономики, обеспечивающая доставку грузов в самые
          труднодоступные уголки страны. ПАО «ЛОРП» играет важную роль в
          перевозке народнохозяйственных грузов на территории республики. От
          работы этой компании зависит жизнь целого региона. Суда смешанного
          река-море плавания осуществляют перевозки нефтепродуктов наливом,
          генеральных и прочих грузов для четырех субъектов Российской Федерации
          – Республики Саха (Якутия), Иркутской области, Красноярского края и
          Чукотского автономного округа. Доминирующий перевозчик на участке
          Северного морского пути от Хатангского залива до Певека, ПАО «ЛОРП»
          играет важную роль в перевозке народнохозяйственных грузов в
          арктические и западные районы республики.
        </p>
        <h2>ООО «Белый лебедь»</h2>
        <p>
          Устав от забот и суеты мы начинаем мечтать об отдыхе. На протяжении
          многих лет судоходная компания{" "}
          <a
            href="http://www.bely-lebed.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            «Белый лебедь»
          </a>{" "}
          воплощает в жизнь эти мечты. Каждый сезон мы приглашаем вас совершить
          увлекательное путешествие по рекам и озёрам России на борту наших
          теплоходов - «Михаил Танич», «Бородино» и «К.А.Тимирязев». Речные
          круизы всегда были и остаются одним из интереснейших видов отдыха. Это
          прекрасное сочетание комфорта, насыщенной культурно-развлекательной
          программы, ярких впечатлений и положительных эмоций. Наша компания
          более 20 лет занимается организацией речных круизов и имеет в этом
          богатый опыт. Мы даём возможность людям получить незабываемые
          впечатления и отдохнуть в полной мере. Благодаря работе
          профессионалов, ваше путешествие будет интересным и беззаботным!
        </p>
        <h2>ООО "Речфлот"</h2>
        <p>
          Компания{" "}
          <a
            href="https://www.rechflot.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            «Речфлот»
          </a>{" "}
          не первый год занимается организацией речных круизов на современных
          теплоходах. Мы предлагаем большой выбор разнообразных туров для
          отдыхающих любого возраста. Какими бы ни были ваши требования и
          предпочтения, у нас вы всегда сможете найти для себя подходящий
          вариант отдыха. Компания «Речфлот» предлагает круизы по России на
          современных комфортабельных теплоходах с насыщенной и интересной
          программой по доступной цене. Уточнить расписание вы можете у нашего
          менеджера. У вас есть возможность отдохнуть на борту уютного теплохода
          и познакомиться с волжскими городами, их достопримечательностями,
          традициями и современной жизнью. Круизы по Волге в 2021 году включают
          в маршрут следующие прибрежные города:
          <ul>
            <li>Ярославль</li>
            <li>Кострома</li>
            <li>Плес</li>
            <li>Нижний Новгород</li>
            <li>Самара</li>
            <li>Саратов</li>
            <li>Астрахань и другие</li>
          </ul>
        </p>
        <h2>ООО "Волга Тур"</h2>
        <p>
          <a
            href="https://volgatour.ru/"
            target={"_blank"}
            rel="noreferrer"
            className={toggleClassName(
              "education__link",
              "education__link-white",
              "education__link-black",
              "education__link-contrast"
            )}
          >
            В ООО "Волга Тур"
          </a>{" "}
          На двухпалубный теплоход СРОЧНО требуется:
          <ul>
            <li>рулевой</li>
            <li>матрос</li>
            <li>моторист</li>
          </ul>
          Звоните, пишите Ватсап 8-965-523-25-75 Яна
        </p>
        <h2>Сайты - агрегаторы вакансий</h2>
        <ul>
          <li>
            <a
              href="https://uchaly.superjob.ru/vakansii/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Superjob
            </a>
          </li>
          <li>
            <a
              href="https://www.trud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              Trud.com
            </a>
          </li>
          <li>
            <a
              href="https://ufa.hh.ru/employer"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              HEADHUNTER.RU
            </a>
          </li>
          <li>
            <a
              href="https://ufa.rabota.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              RABOTA.RU
            </a>
          </li>
          <li>
            <a
              href="https://www.zarplata.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              ZARPLATA.RU
            </a>
          </li>
          <li>
            <a
              href="https://jobsora.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={toggleClassName(
                "education__link",
                "education__link-white",
                "education__link-black",
                "education__link-contrast"
              )}
            >
              ru.jobsora.com
            </a>
          </li>
        </ul>
      </section>
    </>
  );
});
export default VacanciesFrom;