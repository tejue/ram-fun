import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./utils/CharacterData.tsx";

type CharacterFormProps = {
    addNewCharacter: (newCharacter: Character) => void
}
export default function CharacterForm(props: CharacterFormProps) {

    const [characterName, setCharacterName] = useState<string>("")
    const [characterStatus, setCharacterStatus] = useState<string>("")

    function handleCharacterName(event: ChangeEvent<HTMLInputElement>) {
        setCharacterName(event.target.value)
    }

    function handleCharacterStatus(event: ChangeEvent<HTMLSelectElement>) {
        setCharacterStatus(event.target.value)
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newCharacter: Character = {name: characterName, status: characterStatus}
        props.addNewCharacter(newCharacter)
        setCharacterName("")
        setCharacterStatus("")
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
                    value={characterStatus}
                    onChange={handleCharacterStatus}
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