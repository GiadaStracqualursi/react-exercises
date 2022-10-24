import React from "react";

export class ToDoList extends React.Component{
    state = {
        items: [
            'letteratura',
            'storia',
            'geografia',
            'latino'

        ]
    }

    
    


    render(){

        const todos = this.props.names.map((todo => <li key={todo.id}></li>)

        return (
            <div>
                <ul>
                    {todos}

                </ul>
            </div>
        )
    }
}