import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
const Badge = ({ title, className }) => {
  const classes = classNames("badge ", className);
  return <div className={classes}>{title}</div>;
};

Badge.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
Badge.defaultProps = {
  title: "default badge",
};
export default Badge;
