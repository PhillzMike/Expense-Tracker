import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (newFilter) => {
    setFilteredYear(newFilter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return filteredYear === "all"
      ? true
      : expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
