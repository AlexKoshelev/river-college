import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { toggleClassName } from "../../../utils/disabled";
import { observer } from "mobx-react-lite";

const BreadCrumbs = observer(() => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div
        className={toggleClassName(
          "breadCrumbs__container",
          "breadCrumbs__container-white",
          "breadCrumbs__container-black",
          "breadCrumbs__container-contrast"
        )}
      >
        <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Главная</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Главная</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeToReactRouter = `/${pathnames
              .slice(0, index + 1)
              .join("/")}`;
            let routeTo = routeToReactRouter;
            switch (routeToReactRouter) {
              case "/sveden":
                return (routeTo = null);
              case "/sveden/common":
                return (routeTo = "/ Основные сведения");
              case "/sveden/struct":
                return (routeTo = "/ Структура и органы управления");
              case "/sveden/document":
                return (routeTo = "/ Документы");
              case "/sveden/education":
                return (routeTo = "/ Образование");
              case "/sveden/eduStandarts":
                return (routeTo = "/ Образовательные стандарты и требования");
              case "/sveden/employees":
                return (routeTo = "/ Руководство");
              case "/sveden/objects":
                return (routeTo = "/ Материально-техническое обеспечение");
              case "/sveden/grants":
                return (routeTo = "/ Меры поддержки обучающихся");
              case "/sveden/paid__edu":
                return (routeTo = "/ Платные образовательные услуги");
              case "/sveden/budget":
                return (routeTo = "/ Финансово-хозяйственная деятельность");
              case "/sveden/vacant":
                return (routeTo = "/ Вакантных мест для приема (перевода)");
              case "/sveden/ovz":
                return (routeTo = "/ Доступная среда");
              case "/sveden/inter":
                return (routeTo = " / Международное сотрудничество");
              default:
                routeTo = null;
                break;
            }
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item value="large" key={index}>
                {capatilize(name)}
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item value="large" key={index}>
                <Link value="large" to={`${routeTo}`}>
                  {capatilize(name)}
                </Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };

  return <>{breadCrumbView()}</>;
});

export default BreadCrumbs;
