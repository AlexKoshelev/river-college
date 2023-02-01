import React from "react";
import DisabledElements from "./DisabledElements";
const Disabled = () => {
  /*   const [isActive, setActive] = useState("");
  const handleToggleClassName = () => {
    if (isActive === "size1") {
      return setActive("-active");
    } else if (isActive === "size2") {
      return setActive("-active");
    } else if (isActive === "size2") {
      return setActive("-active");
    }
  };
  const handleToggle = (item) => {
    setActive(item);
  }; */
  return (
    <>
      <DisabledElements
      /*  isActive={isActive}
        handleToggle={handleToggle}
        handleToggleClassName={handleToggleClassName} */
      />
    </>
  );
};
export default Disabled;
