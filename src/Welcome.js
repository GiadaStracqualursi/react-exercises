import React from 'react'
import {Age} from './Age'


export class Welcome extends React.Component {
    render(){
        return <p> Welcome {this.props.name === 'John'} 
        <Age />
          </p>
       
    }
}