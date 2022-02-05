import { useState } from "react";
import "./ExpenseForm.css";

import ExpenseFormControls from "./ExpenseFormControls";
import ExpenseFormActions from "./ExpenseFormActions";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  
  const resetControls = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const cancelHandler = (event) => {
    resetControls();
    props.onFinishEditing();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    resetControls();
    props.onFinishEditing();
  };

  return (
    <form onSubmit={submitHandler}>
      <ExpenseFormControls
          title={enteredTitle}
          amount={enteredAmount}
          date={enteredDate}
          titleChangeHandler={titleChangeHandler}
          amountChangeHandler={amountChangeHandler}
          dateChangeHandler={dateChangeHandler}
        />
      <ExpenseFormActions cancelHandler={cancelHandler}/>
    </form>
  );
};

export default ExpenseForm;
