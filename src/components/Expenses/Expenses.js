import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(data) {
  const [year, setYear] = useState("2021");

  const saveFilterDatehandler = (filterYear) => {
    setYear(filterYear);
    console.log(year);
  };

  const expenseYears = data.items.filter(
    (expense) =>
      expense.date.toLocaleString("en-US", { year: "numeric" }) === year
  );

  console.log(data);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onFilterExpenseChange={saveFilterDatehandler}
        />
        {expenseYears.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
