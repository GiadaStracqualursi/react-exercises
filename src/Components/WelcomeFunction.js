import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Age} from './Age'



export function WelcomeFunction({name}) {

const navigate= useNavigate

 function handleCounterButton(){
  navigate('/counter')
  }
 
        return (<div>
          <p className='welcome'> Welcome {name}
          <Age />
            </p>
            <button onClick={handleCounterButton}>Bottone di navigazione</button>

            </div>)
        
       
    
}