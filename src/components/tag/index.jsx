import React from "react";

import classes from "./tag.module.css";

const Tag = ({ tags }) => {
  return (
    <ul className={classes.tags}>
      {tags.map(tag => (
        <li key={tag} className={classes.tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default Tag;
