import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
const LiveCard = ({ title, children, className }) => {
  const classes = classNames("liveCard ", className);
  return (
    <div className={classes}>
      {children}
      <div className="liveCard__title">{title}</div>
    </div>
  );
};
LiveCard.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
export default LiveCard;
