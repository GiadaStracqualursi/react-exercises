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

	render() {
		return (
			<div>
                <h3>Insegnamenti</h3>
				<form onSubmit={this.handleSubmit}>
					<input name="todo" />
					<button type="submit">Submit</button>
				</form>

				<ul>
					{this.state.todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</div>
		)
	}
}