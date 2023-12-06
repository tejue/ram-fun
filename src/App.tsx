import {useState} from 'react'
import './App.css'
import {characterData} from "./utils/CharacterData.tsx";

function App() {
    const [characters, setCharacters] = useState<object>(characterData)
    const [searchTerm, setSearchTerm] = useState<string>("");

    function handleSearchCharacter(event: React.ChangeEvent<HTMLInputElement>) {
        const search = event.target.value;
        setSearchTerm(search);

        const filteredCharacter = characterData.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()))
        setCharacters(filteredCharacter);
    }


    return (
        <>
            <label htmlFor="search">Suche: <input id="search" onChange={handleSearchCharacter}/></label>
            <p></p>
            <div>
                {searchTerm && (
                    characters.map((character) => (
                        <div key={character.id}>
                            <img src={character.image} alt={character.name}/>
                            <p>{character.name}</p>
                        </div>)))}
                {!searchTerm && <p>Gib einen Suchbegriff ein, um Charaktere anzuzeigen.</p>}
                {searchTerm && characters.length === 0 &&  <p>Keine Ergebnisse gefunden. Versuche es mit einem anderen Namen.</p>}            </div>
        </>
    )
}

export default App
