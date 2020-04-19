import React from "react";

import imgSrc from "../../images/picture.jpeg";
import Socials from "../socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="Berkan Sivri"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Berkan Sivri</h1>
        <h2>Full-Stack Developer based in Istanbul, Turkey.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
