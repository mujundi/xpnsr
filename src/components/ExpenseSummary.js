import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";

import selectedExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/expenses-total";

const ExpenseSummary = (props) => {
  const numOfExpenses = props.selectedExpenses.length;
  return (
    <div className="page-header">
      <div className="content-container">
        {numOfExpenses === 0 && (
          <h1 className="page-header__title page-header__err">
            Looks like you've got no expenses tracked.
            <br />
            Click below to add an expense!
          </h1>
        )}

        {numOfExpenses > 0 && (
          <h1 className="page-header__title">
            Viewing <span>{numOfExpenses}</span>
            {numOfExpenses > 1 ? " expenses" : " expense"} totalling
            <span>
              {numeral(totalExpenses(props.selectedExpenses) / 100).format(
                " $0,0.00"
              )}
            </span>
            .
          </h1>
        )}
        <hr />
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    selectedExpenses: selectedExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStatesToProps)(ExpenseSummary);
