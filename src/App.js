import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses=[
    {title:'Car Insurence',amount:748.44,date:new Date(2023,2,28)},
    {title:'Bike Insurence',amount:748.44,date:new Date(2025,2,28)},
    {title:'motor Insurence',amount:748.44,date:new Date(2021,2,28)},
    {title:'vehicle Insurence',amount:748.44,date:new Date(2021,2,28)}
  ]
  return (
    <div className="App">
      <h2>Lets get start</h2>
      <header className="App-header">
        <ExpenseItem title={expenses[0].title} amount={expenses[1].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
