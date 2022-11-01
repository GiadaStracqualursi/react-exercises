import React from "react";
import { Counter } from "./Counter";


export class ClickCounter extends React.Component{
    state = {
        count: 0,
    }

    handleCounterIncrement = () => {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }
    render(){

        return(
        <div><Counter/>
          <h3> Count: {this.state.count}</h3>
        <button onClick={this.handleCounterIncrement}> Increment</button></div>
        )

    }
}