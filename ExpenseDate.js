

function ExpenseDate(props){

    const month = props.date.toLocaleString('en-US',{month:'long'})
    const day = props.date.toLocaleString('en-US',{day: '2-digit'})
    const year = props.date.getFullYear()

    return <div className="expense-data">
        <div className="expense-data__mount">{month}</div>
        <div className="expense-data__year">{year}</div>
        <div className="expense-data__day">{day}</div>
    </div>

};

export default ExpenseDate