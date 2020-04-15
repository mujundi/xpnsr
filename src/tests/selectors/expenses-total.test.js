import expenses from "../fixtures/expenses";
import totalExpenses from "../../selectors/expenses-total";

test("should sum up all the expenses", () => {
  const total = totalExpenses(expenses);
  const sum = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(total).toBe(sum);
});

test("should give a sum of 0 for if no expenses passed", () => {
  const total = totalExpenses([]);
  expect(total).toBe(0);
});

test("should give sum equal to single expense if only 1 expense exists", () => {
  const total = totalExpenses([expenses[1]]);
  expect(total).toBe(expenses[1].amount);
});
