import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses=[
    {title:'Car Insurence',amount:734.44,date:new Date(2023,2,28)},
    {title:'Bike Insurence',amount:2434.434,date:new Date(2025,2,28)},
    {title:'motor Insurence',amount:766.44,date:new Date(2021,2,28)},
    {title:'vehicle Insurence',amount:565.434,date:new Date(2021,2,28)}
  ]
  return (
    <div className="App">
      <NewExpense />
      <header className="App-header">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
