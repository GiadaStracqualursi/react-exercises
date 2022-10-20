
import './App.css';
import { Counter } from './Counter';
import {Welcome} from './Welcome'

function App() {
  return (
    <div className="App">
      <Welcome name={<strong>Alfio</strong>} age= {16} /> 
      <Counter />
    </div>
  );
}

export default App;
