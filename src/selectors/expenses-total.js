export default (expenses) => {
  return expenses.reduce(function (total, expense) {
    return total + expense.amount;
  }, 0);
};
