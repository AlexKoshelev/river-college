import React from "react";
const DisabledElements = ({
  isActive,
  handleToggle,
  handleToggleClassName,
}) => {
  return (
    <>
      <div className="header__section-disabled">
        <div className="disabled__container">
          <div className="disabled__container-label">Размер</div>
          <div className="disabled__container-block">
            <div
              className={
                isActive
                  ? "disabled__container-block-aa-active"
                  : "disabled__container-block-aa"
              }
            >
              А
            </div>
            <div
              className={
                isActive
                  ? "disabled__container-block-aa-active"
                  : "disabled__container-block-aa"
              }
              /*    onClick={handleToggle("size2")} */
            >
              А
            </div>
            <div
              className={
                isActive
                  ? "disabled__container-block-aaa-active"
                  : "disabled__container-block-aaa"
              }
              /*  onClick={handleToggle("size3")} */
            >
              А
            </div>
          </div>
        </div>
        <div className="disabled__container">
          {" "}
          <div className="disabled__container-label">Цвет</div>
          <div className="disabled__container-block">
            <div className="disabled__container-block-c">С</div>
            <div className="disabled__container-block-cc">С</div>
            <div className="disabled__container-block-ccc">С</div>
          </div>
        </div>
        <div className="disabled__container">
          <div className="disabled__container-label">Изображения</div>
          <div className="disabled__container-block">
            <div className="disabled__container-block-active">Вкл.</div>
            <div className="disabled__container-block-inactive">Выкл.</div>
          </div>
        </div>
        <div className="disabled__container">Обычная версия сайта</div>
      </div>
    </>
  );
};
export default DisabledElements;
