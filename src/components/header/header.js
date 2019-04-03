import React from "react";
import whiteLogo from "assets/img/logo-white.png";

import Button from "../common/button";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img src={whiteLogo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main"> Outdoors </span>
          <span className="heading-primary--sub"> is where life happens </span>
        </h1>
        <Button text="Discover our tours" class="btn--white btn--animated" />
      </div>
    </div>
  );
};
