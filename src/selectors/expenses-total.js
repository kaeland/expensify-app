export default (expenses) => {
  return expenses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
};


// const getExpensesTotal = expenses.map((obj) => {
//   obj.amount
// }).reduce((tot, cur) => {
//   return tot + cur;
// });