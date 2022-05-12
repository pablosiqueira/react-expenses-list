import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import './components/Expenses/Expenses.css'
import Card from './components/UI/Card'
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import Footer from "./components/Footer/Footer";

const expensesData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() { 

  const [expenses, setExpenses] = useState({
    fullExpenses: expensesData,
    filteredExpenses: expensesData
  })

  const addExpenseHandler = expense => {
    console.log(expense)
    setExpenses( prevState => {
      //return {...prevState, fullExpenses: [expense, ...prevState.fullExpenses]}
      return {fullExpenses: [expense, ...prevState.fullExpenses], filteredExpenses: [expense, ...prevState.fullExpenses]}
    })
  }

  const addFilterHandler = selectedYear => {
    if(selectedYear === 'All'){
     // setExpenses(expenses)
      setExpenses((prevState) => {
        return {...prevState,  filteredExpenses: expenses.fullExpenses}
      })
    }else{
      if(selectedYear !== ''){
        const filtered = expenses.fullExpenses.filter(d => {
          let year = d.date.getFullYear()
          return year === parseInt(selectedYear)
        })
        console.log(filtered)
        //setExpenses(filtered)
        setExpenses((prevState) => {
          return {...prevState,  filteredExpenses: filtered}
        })
      }
    }    
  }

  

  //{expenses.filteredExpenses.length === 0 && <p>No Expenses Found</p>}
  //{expenses.filteredExpenses.length > 0 && <Expenses expenses= {expenses.filteredExpenses}/>}

  return (
    <div>
      <Card>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <div className="expenses">
          <ExpensesFilter onAddFilter={addFilterHandler}/>
          <ExpensesChart expenses= {expenses.filteredExpenses}/>
          <Expenses expenses= {expenses.filteredExpenses}/> 
        </div>        
      </Card>
      <Footer/>
    </div>
    
  );
}
export default App;
