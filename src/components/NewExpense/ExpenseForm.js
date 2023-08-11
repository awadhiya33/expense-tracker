import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm=()=>{
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const titleHandler=(event)=>{
        setEnteredTitle(event.target.value);
        console.log(event);
    }
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2000-01-01" max="2023-08-11" onChange={dateHandler}></input>
            </div>
        </div>
            <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>

};
export default ExpenseForm;