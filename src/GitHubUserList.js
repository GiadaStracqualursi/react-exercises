import {  useState } from "react"
import { GithubUser } from "./GithubUser"

export function GitHubUserList (){
    const [input, setInput] = useState([])


    function handleSubmit(event){
        event.preventDefault()
		const element = event.target.elements.username.value
		setInput([...input, element])
	}

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input>
                <input type="text" name="username" />
				<button type="submit">Submit</button>
                </input>
            </form>

            <ul>
				{input.map((username, key) => (
					<li key={key}>
						<GithubUser username={username} />
					</li>
				))}
			</ul>

        </div>
    )
}