import {useEffect, useState} from 'react'
import './App.css'
import {Character, characterData} from "./utils/CharacterData.tsx";
import CharacterList from "./CharacterList.tsx";
import InputSearch from "./InputSearch.tsx";
import CharacterForm from "./CharacterForm.tsx";
import {Characterli} from "./Characterli.ts";
import axios from "axios";

function App() {

    //const [characters, setCharacters] = useState<Character[]>(characterData)
    const [characters, setCharacters] = useState<Characterli[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("");

    const [id, setId]= useState<number>(1)

    useEffect(
        () => fetchData
        , [id]
    )
    function fetchData(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => setCharacters(response.data.results))
            .catch((error)=> console.log(error.message))
    }

    function handleSearchCharacter(search: string) {
        setSearchTerm(search);

        const filteredCharacter = characterData.filter((character: Character) => character.name.toLowerCase().includes(search.toLowerCase()))
        setCharacters(filteredCharacter);
    }

    function updateCharacter(newCharacter: Character) {
        setCharacters([...characters, newCharacter])
    }

    return (
        <>
            <CharacterForm addNewCharacter={updateCharacter}/>
            <InputSearch handleInputSearch={handleSearchCharacter}/>
            {characters.map((character: Character) =>
                <CharacterList
                    key={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                    species={character.species}/>
            )}

        </>
    )
}

export default App
