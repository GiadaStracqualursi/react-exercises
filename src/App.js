
import './App.css';
import { ClickCounter } from './ClickCounter';
import {Welcome} from './Welcome'

function App() {
  return (
    <div className="App">
      <Welcome name={<strong>Alfio</strong>} age= {16} /> 
      <ClickCounter/>

    </div>
  );
}

export default App;
