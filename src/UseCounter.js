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

