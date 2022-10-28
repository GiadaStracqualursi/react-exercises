import { useState, useEffect } from "react"

export function CounterFunction({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)

    useEffect(()=>{}, [counter])

    function heandleCounterIncrement(){
        setCounter(c=> c + 1)

    }

    function heandleCounterReset (){
        setCounter(initialValue)
    }

    return( <div>
    <h2>Counter: {counter}</h2>
    <button onClick={heandleCounterIncrement}>Increment</button>
    <button onClick={heandleCounterReset}>Reset</button>
    </div>
    ) 
}