import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";

import selectedExpenses from "../selectors/expenses";
import totalExpenses from "../selectors/expenses-total";

const ExpenseSummary = (props) => {
  const numOfExpenses = props.selectedExpenses.length;
  return (
    <div>
      {numOfExpenses > 0 && (
        <h3>
          Viewing {numOfExpenses}
          {numOfExpenses > 1 ? " expenses" : " expense"} totalling
          {numeral(totalExpenses(props.selectedExpenses) / 100).format(
            " $0,0.00"
          )}
          .
        </h3>
      )}
    </div>
  );
};

const mapStatesToProps = (state) => {
  return {
    selectedExpenses: selectedExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStatesToProps)(ExpenseSummary);
