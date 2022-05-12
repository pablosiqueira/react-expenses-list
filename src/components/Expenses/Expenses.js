import ExpenseItem from "./ExpenseItem";

function Expenses(props){
        if(props.expenses.length === 0){
            return <h2 className="expenses-list__fallback">No Expenses Found</h2>
        }else{
            return (
                <div>
                    <ul className="expenses-list">
                        {props.expenses.map((d) => <ExpenseItem key={d.id} title={d.title} amount={d.amount} date={d.date}></ExpenseItem>)}
                    </ul>
                </div>               
            )
        }
}

export default Expenses