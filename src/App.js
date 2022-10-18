
import './App.css';

import { HelloWorld } from '../../../Develhope/fullstack/React/esercizio1/src/Component/HelloWorld';
import { Message } from './Message';

function App() {
  return (
    <div className="App">
      <HelloWorld/> 
      <Message />
        Se uso più volte il component appare esattamente come l'ho impostato
      
    </div>
  );
}

export default App;
