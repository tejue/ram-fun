type CharacterListProps =
    {
        name: string;
        image: string;
        status: string;
    }

export default function CharacterList({name, image, status}: CharacterListProps) {
    return (

        <ul>
            <img src={image} alt={name}/>
            <p>{name}, {status}</p>
        </ul>
    )
}