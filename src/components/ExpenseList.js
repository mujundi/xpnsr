import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div>
        <div>Expenses</div>
        <div>Expense</div>
        <div>Amount</div>
      </div>
      <h1>Expense List</h1>
      {props.filters.text && <p>Filter: "{props.filters.text}"</p>}
      <ol>
        {props.expenses.map((expense, index) => {
          return (
            <li key={index}>
              <ExpenseListItem {...expense} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
