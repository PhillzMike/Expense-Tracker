import "./ExpenseFormControls.css";

const ExpenseFormControls = (props) => {
  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          value={props.title}
          onChange={props.titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          value={props.amount}
          min="0.01"
          step="0.01"
          onChange={props.amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          value={props.date}
          min="2019-01-01"
          step="2022-12-31"
          onChange={props.dateChangeHandler}
        />
      </div>
    </div>
  );
};

export default ExpenseFormControls;
