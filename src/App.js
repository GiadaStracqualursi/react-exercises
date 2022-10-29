
import './App.css';
import { CounterFunction } from './CounterFunction';

import { GitHubUser } from './GitHubUser';
import { UseCounter } from './UseCounter';


function App() {

  return (
    <div className="App">
      <GitHubUser username={'giadastracqualursi'}/>
      <CounterFunction />
    

      </div>

    
  );
}

export default App;
