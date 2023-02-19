import React from "react";
import { toggleClassName, toggleFontSize } from "../../../../utils/disabled";
const Document = () => {
  return (
    <div
      style={{ fontSize: toggleFontSize(1) }}
      className={toggleClassName(
        "common__container",
        "common__container-white",
        "common__container-black",
        "common__container-contrast"
      )}
    >
      Document
    </div>
  );
};
export default Document;
