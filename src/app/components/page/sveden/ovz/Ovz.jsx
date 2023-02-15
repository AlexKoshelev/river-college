import React from "react";
import { toggleClassName } from "../../../../utils/disabled";
const Document = () => {
  return (
    <div
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
