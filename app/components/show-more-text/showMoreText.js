"use client"

import React, { useState } from "react";

const ShowMoreText = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {showMore ? props.text.textExpanded : props.text.textHidden}
      <br />
      <button className=" hover:text-link-hover-color underline" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default ShowMoreText;
