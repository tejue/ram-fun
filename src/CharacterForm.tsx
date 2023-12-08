export default function CharacterForm() {
    return (
        <form>
            <label htmlFor="name">Name des neuen Characters
                <input name="name" id="name" type="text"/></label>
            <br/>
            <label htmlFor="status">Status des Characters
                <select name="status" id="status">
                    <option value="unknown">Unkown</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                </select></label>
            <br/>
            <label htmlFor="speciesHuman"><input id="speciesHuman" name="species" type="radio"/> Human</label>
            <label htmlFor="speciesNotHuman"><input id="speciesNotHuman" name="species" type="radio"/> not Human</label>
        </form>)
}