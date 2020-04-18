import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Xpnsr</h1>
    <h2>Expense tracking made easy.</h2>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
  </header>
);

export default Header;
