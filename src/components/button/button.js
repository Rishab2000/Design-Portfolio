import React from "react";
import {Link} from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Button = (props) => {
  return (
    <Link to={props.destination} className="hover:text-link-hover-color">
      <button className=" text-red :text-link-hover-color mt-8">
        <ArrowForwardIcon style={{fontSize:30}}/>
      </button>
    </Link>
  );
};

export default Button;
