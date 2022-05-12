import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    /*const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')*/
    const [addForm, setAddForm] = useState('hide')
    
    const showHideForm = (event) => {
        setAddForm(event.target.value)
    }

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value)
       /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })*/
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState,  enteredDate: event.target.value}
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate + ' EDT')
        }
        props.onSaveExpenseData(expenseData)
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        }) 
        
    }
  
    if(addForm === 'show'){
        return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2000-01-01' max='2030-12-31' value={userInput.enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={showHideForm} value='hide'>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
        </form>
    }else{
        return <div className='new-expense__add-new'><button onClick={showHideForm} value='show'>Add New Expense</button></div>
    }

}

export default ExpenseForm