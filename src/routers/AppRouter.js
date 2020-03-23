import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
{
  /* <div>
  <p>Nisl nunc mi ipsum faucibus. Amet nulla facilisi morbi tempus. Sed arcu non odio euismod lacinia at quis. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Libero enim sed faucibus turpis in eu mi bibendum.</p>
  <p>Amet nulla facilisi morbi tempus. Sed arcu non odio euismod lacinia at quis. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies.</p>
  <p>Turpis egestas sed tempus urna et pharetra. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Habitant morbi tristique senectus et netus et malesuada. Tellus rutrum tellus pellentesque eu.</p>
</div>

<div>
  <p>OUR TAX PLANNING & PREPARATION ROLES INCLUDE, BUT ARE NOT LIMITED TO:</p>
  <ul>
    <li>Placeholder list item</li>
    <li>Placeholder list item</li>
    <li>Placeholder list item</li>
    <li>Placeholder list item</li>
    <li>Placeholder list item</li>
  </ul>
</div> */
}
