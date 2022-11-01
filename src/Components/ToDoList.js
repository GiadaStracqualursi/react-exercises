import React from 'react'

export class ToDoList extends React.Component {
	state = {
		todos: ['Letteratura',
                'Storia',
                'Geografia',
                'Latino'],
	}

	handleSubmit = (event) => {
		event.preventDefault()

		const todo = event.target.elements.todo.value
    
    

		this.setState((state) => {
			return {
				todos: [...state.todos, todo],
			}
		})
	}

	handleReset = () => {
		this.setState({
			todos: [],
		})
	}

	handleClick = (element) => {
		this.setState((state) => {
			return {
				todos: state.todos.filter((todo, index) => index !== element),
			}
		})
	}

	render() {
		return (
			<div>
                <h3>Insegnamenti</h3>
				<form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<input name="todo" />
					<button type="submit">Submit</button>
				</form>

				{this.props.render(this.state.todos, this.handleClick)}
				
			</div>
		)
	}
}

export class TodoListContainer extends React.Component {
	render() {
		return (
			<ToDoList
				render={(todos, handleClick) => {
					return (
						<ul>
							{todos.map((todo, index) => (
								<li key={index}>{todo} <button onClick={() => handleClick(index)}>X</button></li>
							))}
						</ul>
					)
				}}
			/>
		)
	}
}