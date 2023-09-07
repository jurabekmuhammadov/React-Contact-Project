import React, { Component } from "react";

import "./Header.scss";
export class Header extends Component {
  render() {
      return (
      <header>
        <div className="header__container container">
          <h2>React Contact Project</h2>
        </div>
      </header>
    );
  }
}

export default Header;
