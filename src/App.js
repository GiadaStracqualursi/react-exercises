import { WelcomeFunction } from "././Components/WelcomeFunction";
import "././StileComponents/index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <WelcomeFunction name='John'/>} />
      </Routes>
    </div>
  );
}
