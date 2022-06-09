import "./ExpenseItem.css";

function ExpenseItem(data) {
  return (
    <div className="expense-item">
      <div>{data.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{data.title}</h2>
        <div className="expense-item__price">{data.amount} €</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
