//import {Character} from "./utils/CharacterData.tsx";

type CharacterListProps =
    {
        name: string;
        image: string;
        status: string;
        species: string;
    }

export default function CharacterList({name, image, status, species}: CharacterListProps) {
    return (

        <ul>
            <img src={image} alt={name}/>
            <p>{name}, {status}</p>
            <p>{species}</p>
        </ul>
    )
}

