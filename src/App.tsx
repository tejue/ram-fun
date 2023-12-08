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

    const [pageId, setPageId] = useState<number>(1)

    useEffect(
        () => fetchData()
        , [pageId]
    )

    function fetchData() {
        axios.get(`https://rickandmortyapi.com/api/character?page=${pageId}`)
            .then((response) => {
                console.log('API Response:', response.data);
                setCharacters(response.data.results);
            })
            .catch((error) => console.log(error.message))
    }

    function handleSearchCharacter(search: string) {
        setSearchTerm(search);

        const filteredCharacter = characterData.filter((character: Character) => character.name.toLowerCase().includes(search.toLowerCase()))
        setCharacters(filteredCharacter);
    }

    function updateCharacter(newCharacter: Character) {
        setCharacters([...characters, newCharacter])
    }

    function pagination() {
        /* setPageId((prevPageId) => prevPageId + 1)*/
        pageId < 42 ? setPageId(pageId + 1) : alert("no more characters so no more pages");
    }

    return (
        <>
            <CharacterForm addNewCharacter={updateCharacter}/>
            <InputSearch handleInputSearch={handleSearchCharacter}/>
            <br/>
            <button onClick={pagination}>{">>> next 20 Characters >>>"}</button>
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
