import { WelcomeFunction } from "././Components/WelcomeFunction";
import "././StileComponents/index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CounterFunction } from "././Components/CounterFunction";
import {GitHubUser} from '././Components/GitHubUser';
import { Link } from "react-router-dom";


export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <WelcomeFunction name='John'/>} />
        <Route path="counter" element= {<CounterFunction/>} />
        <Route path="/users/:username" element= {<GitHubUser/>} />
      </Routes>

      <hr/>
      <Link to= '/'>Welcome</Link> 
      <hr/>
      <Link to= '/counter'>Count</Link>
      <hr/>
      <Link to= '/users/Giada S'>User</Link>
      <hr/>
      
    </div>
  );
}
