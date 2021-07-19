import React from "react";
import {Link} from 'react-router-dom'

const Button = (props) => {
  return (
    <Link to={props.destination} className="hover:text-link-hover-color">
      <button className="text-avenir-book text-sm text-red hover:text-link-hover-color border-2 w-16 h-16 mt-8">
        More
      </button>
    </Link>
  );
};

export default Button;
