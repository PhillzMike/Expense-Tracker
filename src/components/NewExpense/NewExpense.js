import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [editingStatus, setEditingStatus] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addExpenseHandler = (event) => {
    setEditingStatus(true);
  };

  const doneEditingHandler = () => {
    setEditingStatus(false);
  };

  return (
    <div className="new-expense">
      {!editingStatus && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {editingStatus && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onFinishEditing={doneEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
