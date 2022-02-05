import "./ExpenseFormActions.css";

const ExpenseFormActions = (props) => {
  return (
    <div className="new-expense__actions">
      <button type="button" onClick={props.cancelHandler}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  );
};

export default ExpenseFormActions;
