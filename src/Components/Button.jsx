import React from "react";
import { Link } from "react-router-dom";

Button2.propTypes = {};

function Button2(props) {
  const { title, link } = props;
  return (
    <Link to={link} className="tf-button style-1">
      {title}
      <span className="icon-keyboard_arrow_right"></span>
    </Link>
  );
}

export default Button2;
