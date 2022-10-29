
import { useGitHubUser } from "./useGitHubUser";


export function GitHubUser({username}){

const {data, loading, error}= useGitHubUser(username)



}
