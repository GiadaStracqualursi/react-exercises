import { useState, useEffect } from "react"

export function CounterFunction({initialValue = 0}){

    const [counter, setCounter] = useState(initialValue)

    useEffect(()=>{
        console.log('I have mounted')
        return()=>{
            console.log('I have about to be unmounted')
        }
    }, [])

    const [showCounter, setShowCounter] = useState (true)

    function heandleToggleCounter(){
        setShowCounter(s => !s)

    }

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
    <button onClick={heandleToggleCounter}>Toggle Counter</button>
    {showCounter && CounterFunction}
    </div>
    ) 
}