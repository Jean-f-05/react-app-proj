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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onFilterExpenseChange={saveFilterDatehandler}
        />
        <ExpenseItem
          title={data.items[0].title}
          amount={data.items[0].amount}
          date={data.items[0].date}
        />
        <ExpenseItem
          title={data.items[1].title}
          amount={data.items[1].amount}
          date={data.items[1].date}
        />
        <ExpenseItem
          title={data.items[2].title}
          amount={data.items[2].amount}
          date={data.items[2].date}
        />
        <ExpenseItem
          title={data.items[3].title}
          amount={data.items[3].amount}
          date={data.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
