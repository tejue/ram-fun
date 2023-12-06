import {useState} from 'react'
import './App.css'
import {Character, characterData} from "./utils/CharacterData.tsx";
import CharacterList from "./CharacterList.tsx";

function App() {
    const [characters, setCharacters] = useState<Character[]>(characterData)
    const [searchTerm, setSearchTerm] = useState<string>("");

    function handleSearchCharacter(event: React.ChangeEvent<HTMLInputElement>) {
        const search = event.target.value;
        setSearchTerm(search);

        const filteredCharacter = characterData.filter((character: Character) => character.name.toLowerCase().includes(search.toLowerCase()))
        setCharacters(filteredCharacter);
    }


    return (
        <>
            <label htmlFor="search">Suche: <input id="search" onChange={handleSearchCharacter}/></label>
            <p></p>

            {characterData.map((character: Character) =>
                <CharacterList key={character.id} name={character.name} image={character.image}
                               status={character.status}/>
            )}
        </>
    )
}

export default App
