import React from "react";
import PropTypes from "prop-types";
import "./image.scss";
import classNames from "classnames";
const Image = ({ src, alt, className, width, height, ...attrs }) => {
  const classes = classNames("image ", className);
  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
      {...attrs}
    />
  );
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
Image.defaultProps = {
  src: "",
  alt: "картинка уплыла :(",
  className: "",
};
export default Image;
