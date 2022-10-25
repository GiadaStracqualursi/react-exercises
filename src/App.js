
import './App.css';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { Container } from './Container';
import { InteractiveWelcome } from './InteractiveWelcome';
import { LoginForm } from './LoginForm';
import { Sum } from './Sum';
import { ToDoList } from './ToDoList';

import { UncontrolledLogin } from './UncontrolledLogin';
import {Welcome} from './Welcome'
import { WelcomeFunction } from './WelcomeFunction';

function App() {
  return (
    <div className="App">
      <Welcome name={<strong>Alfio</strong>} age= {16} /> 
      <ClickCounter/>
      <ClickTracker/>
      <InteractiveWelcome/>
      <LoginForm/>
      <UncontrolledLogin/>
      <Container title= {'Ciao Alfio'}/>
      <WelcomeFunction/>
      <Sum/>
      <div>
      <ToDoList/>

      </div>

    </div>
  );
}

export default App;
