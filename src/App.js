import { WelcomeFunction } from "././Components/WelcomeFunction";
import "././StileComponents/index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CounterFunction } from "././Components/CounterFunction";
import {GitHubUser} from '././Components/GitHubUser';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <WelcomeFunction name='John'/>} />
        <Route path="counter" element= {<CounterFunction/>} />
        <Route path="/:username" element= {<GitHubUser/>} />
        
      </Routes>
    </div>
  );
}
