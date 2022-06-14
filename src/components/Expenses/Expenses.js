import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onFilterExpenseChange={saveFilterDatehandler}
        />
        <ExpensesChart expenses={expenseYears} />
        <ExpensesList items={expenseYears} />
      </Card>
    </div>
  );
}

export default Expenses;
