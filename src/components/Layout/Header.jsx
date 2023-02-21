import React, { Fragment } from "react";
import classes from "./Header.module.css";
import imgHeader from "../assets/mainheader.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgHeader} alt="Table of Food" />
      </div>
    </Fragment>
  );
};

export default Header;
