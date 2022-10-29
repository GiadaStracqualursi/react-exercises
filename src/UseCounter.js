import { useState } from "react"

export function UseCounter({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)


    function heandleCounterIncrement(){
        setCounter(c=> c + 1)

    }

    function heandleCounterDecrement(){
        setCounter(c=> c - 1)

    }

    function heandleCounterReset (){
        setCounter(initialValue)
    }


    return{
        conter: counter,
        onIncrement: heandleCounterIncrement,
        onDecrement: heandleCounterDecrement,
        onReset: heandleCounterReset
       
    }
    
}

export function CounterFunction ({initialValue=0}){

    const {counter, onIncrement, onDecrement, onReset} = UseCounter(initialValue)

    return( <div>
    <h2>Counter: {counter}</h2>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onReset}>Reset</button>

   
    </div>
    ) 
}