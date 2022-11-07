import { WelcomeFunction } from "././Components/WelcomeFunction";
import "././StileComponents/index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CounterFunction } from "././Components/CounterFunction";

import { Link } from "react-router-dom";

import { GitHubUserSwr } from "./GitHubUsersSwr";


export function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <WelcomeFunction name='John'/>} />
        <Route path="counter" element= {<CounterFunction/>} />
   
        <Route index element={<div>Add a user and select it</div>} />
        <Route path='users'element={<GitHubUserSwr/>}/>
        
		
        <Route path='*' element={<div><p>Not Found</p> 
        <Link to= '/' element={<p>Go Home</p>} />
        
        </div>} />

      </Routes>

      <hr/>
      <Link to= '/'>Welcome</Link> 
      <hr/>
      <Link to= '/counter'>Count</Link>
      <hr/>
      <Link to= '/users'>Users</Link>
      <hr/>
      
    </div>
  );
}
