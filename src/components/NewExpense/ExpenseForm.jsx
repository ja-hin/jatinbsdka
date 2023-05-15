import React, { useState } from "react";
import "./ExpenseForm.css";
const Expenseform = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titlechangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountchangehandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const datechangehandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titlechangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountchangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={datechangehandler}
          />
        </div>
        <div className="new-expense__actions">
          <button className="btn" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default Expenseform;