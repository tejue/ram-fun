import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./utils/CharacterData.tsx";

export default function CharacterForm() {

    const [characterName, setCharacterName] = useState<string>("")

    function handleCharacterName(event: ChangeEvent<HTMLInputElement>) {
        setCharacterName(event.target.value)
    }
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
        const newCharacter: Character = {name:characterName}

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name des neuen Characters
                <input
                    name={"name"}
                    id={"name"}
                    type={"text"}
                    value={characterName}
                    onChange={handleCharacterName}
                /></label>
            <br/>
            <label htmlFor="status">Status des Characters
                <select
                    name="status"
                    id="status"
                    value={""}

                >
                    <option value="unknown">Unkown</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                </select></label>
            <br/>
            <label
                htmlFor="speciesHuman">
                <input
                    id="speciesHuman"
                    name="species"
                    type="radio"/> Human</label>
            <label
                htmlFor="speciesNotHuman"><input
                id="speciesNotHuman"
                name="species"
                type="radio"/> not Human</label>
            <br/>
            <button type={"submit"}>Clicke here to create new character</button>
        </form>)
}