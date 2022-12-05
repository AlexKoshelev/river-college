import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles/button.scss";
const Button = ({
  children,
  text,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const classes = classNames("button ", className, { active });
  return (
    <>
      <button
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...attrs}
      >
        {children}
        {text}
      </button>
    </>
  );
};
Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};
Button.defaultProps = {
  children: "default button",
  onClick: () => {},
  className: "",
  disabled: false,
  active: false,
};
export default Button;
