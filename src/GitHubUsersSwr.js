
import useSWR, { mutate } from "swr"

function GitHubUsersSwr(username){

    const fetcher = (url) => fetch(url).then((response) => response.json())

    const {data, error} = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

    function refetchData(){
        mutate()
    }
    
    return{
        data,
        loading: !data && !error,
        error,
        refetchData
    }
}

export function GithubUsers({username}){

    const {data, loading, error} = GitHubUsersSwr(username)
    
    return <div>
        {loading && <h1>Loading ...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <h1>{data.name}</h1>}
    </div>
}