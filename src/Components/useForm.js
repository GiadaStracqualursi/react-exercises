import { useState } from 'react'

export function useForm() {
	const [data, setData] = useState({
        input: "",
        password: ""
    })

	function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
		
        setData((data) => {
			return {
				[name]:value
			}
		})
	}

	return ({
        input: data.input,
        password: data.password,
        handleChange
    })

}
export function FormLogin(){
    
    const {input, password, handleChange} = useForm()
    return(
        <>
            <input name="username" value={input} onChange={handleChange} />
            <input name="password" type="password" value={password} onChange={handleChange} />
        </>
    )
}