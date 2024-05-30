
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"; 
import React,{useState} from "react"
import Card from "./Card";


function ExpenseItem (props){

    const [title,setTitle] = useState(props.title)

    const clickFunc = () => {
        setTitle("Clicked! ")
    }

    const clickHandlerServer = () => {
        setTitle("000! ")
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"> {title}</div>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickFunc}>Click </button>
            <button onClick={clickHandlerServer}>Add To Server </button>
        </Card>
    );
}

export default ExpenseItem