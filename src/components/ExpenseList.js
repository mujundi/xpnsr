import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>

      <div className="list-body">
        {props.expenses.map((expense, index) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })}
      </div>
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
