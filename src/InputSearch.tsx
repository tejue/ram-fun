import {ChangeEvent} from "react";

type InputSearchProps = {
    handleInputSearch: (searchTerm: string) => void
}

export default function InputSearch({handleInputSearch}: InputSearchProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleInputSearch(event.target.value);
    };

    return (
        <label htmlFor="search">Suche: <input id="search" onChange={handleChange}/></label>
    )
}