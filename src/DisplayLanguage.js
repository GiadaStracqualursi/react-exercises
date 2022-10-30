import { LanguageContext } from "./LanguageContext"

export function DisplayLanguage(){
    <LanguageContext.Consumer>
				{(language) => <h1>{language}</h1>}
			</LanguageContext.Consumer>
}