import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import './ExpenseForm.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData)
    }
   
    return <div className='new-expense'> 
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>

}

export default NewExpense