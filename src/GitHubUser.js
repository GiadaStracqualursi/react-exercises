import React, { useEffect, useState } from "react";


export function GitHubUser({username}){
const [data, setData]= useState(null)
const [loading, setLoading] = useState(false)
const [error, setError]= useState(null)

useEffect(()=>{
    setLoading(true)
    fetch( 'https://api.github.com/users/${username}' )

    .then((response)=> {

        if (response.status !== 200){
        setError(new Error('user not found'))
        }
       return response.json()
    })

    .then((json)=>{
        console.log(json)
        setLoading(false)
        setData(json)
    })

    .catch(error =>{
        setError(error)
    })

},[username])

return <div>
    {loading && <h1>Loading...</h1>}
    {error && <h1>There has been an error</h1>}
    {data && <h1>{data.username}</h1>}
</div>



}
