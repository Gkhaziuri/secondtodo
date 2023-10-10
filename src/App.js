import './App.css';
// import BackgroundImg from './components/Images/BackgroundImg';
import Todo from './components/Todo';
// import {styled} from 'styled-components';


function App() {
  return (
      <div className="App">
        <h1>TODO</h1>
        <div className='todoDiv'>
          <Todo />
        </div>
      </div>
  );
}

export default App;

