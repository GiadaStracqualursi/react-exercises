
import './App.css';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';
import { LoginForm } from './LoginForm';
import { ToDoList } from './ToDoList';
import { UncontrolledLogin } from './UncontrolledLogin';
import {Welcome} from './Welcome'

function App() {
  return (
    <div className="App">
      <Welcome name={<strong>Alfio</strong>} age= {16} /> 
      <ClickCounter/>
      <ClickTracker/>
      <InteractiveWelcome/>
      <LoginForm/>
      <UncontrolledLogin/>
      <ToDoList names = {['Billy', 'Alfio', 'Sara']}/>

    </div>
  );
}

export default App;
