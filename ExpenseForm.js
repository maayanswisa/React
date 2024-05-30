
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: title,
            amount: parseFloat(amount),
            date: new Date(date)
        };

        props.onAddExpense(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
