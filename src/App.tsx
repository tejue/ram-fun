import {useState} from 'react'
import './App.css'
import {Character, characterData} from "./utils/CharacterData.tsx";
import CharacterList from "./CharacterList.tsx";
import InputSearch from "./InputSearch.tsx";
import CharacterForm from "./CharacterForm.tsx";

function App() {
    const [characters, setCharacters] = useState<Character[]>(characterData)
    const [searchTerm, setSearchTerm] = useState<string>("");

    function handleSearchCharacter(search: string) {
        setSearchTerm(search);

        const filteredCharacter = characterData.filter((character: Character) => character.name.toLowerCase().includes(search.toLowerCase()))
        setCharacters(filteredCharacter);
    }

    return (
        <>
            <CharacterForm/>
            <InputSearch handleInputSearch={handleSearchCharacter}/>

            {searchTerm.length > 0 ?
                characters.map((character: Character) =>
                    <CharacterList
                        key={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                        species={character.species}/>
                ) : <p>Bitte gib einen Characternamen ein.</p>}

        </>
    )
}

export default App
