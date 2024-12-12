import './App.css';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <h1> 348 Project </h1>
      <h3> Press 'Add a task' to add to your list </h3>
      <h3> Press the 'delete task' button to remove a task </h3>
      <Todo />
    </div>
  );
}

export default App;
