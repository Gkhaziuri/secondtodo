import './App.css';
import BackgroundImg from './components/Images/BackgroundImg';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <BackgroundImg />
      <h1>TODO</h1>
      <div className='todoDiv'>
        <Todo />
      </div>
    </div>
  );
}

export default App;
