import React from 'react'
import {Age} from './Age'


export function WelcomeFunction({name}) {
 
        return <p className='welcome'> Welcome {name}
        <Age />
          </p>
       
    
}