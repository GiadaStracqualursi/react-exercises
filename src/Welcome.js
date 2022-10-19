import React from 'react'


export class Welcome extends React.Component {
    render(){
        return <p> Welcome {this.props.name || 'Alfio'}  Your age is {this.props.age}</p> 
    }
}