import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";

const store = configureStore();

// Add expenses
store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 10000,
    createdAt: 10500
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    amount: 6500,
    createdAt: 50000
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500,
    createdAt: 1000
  })
);

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
