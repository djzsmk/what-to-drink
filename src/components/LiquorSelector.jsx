function LiquorSelector({selectedLiquor, onChange}) {
    return (
        <select value = {selectedLiquor} onChange ={(e) => onChange(e.target.value)}>
            <option value ="">Any</option>
            <option value ="Vodka"> Vodka</option>
            <option value ="Rum">Rum</option>
            <option value ="Gin">Gin</option>
            <option value ="Tequila">Tequila</option>
            <option value ="Whiskey">Whiskey</option>
            <option value ="Bourbon">Bourbon</option>
            <option value ="Scotch">Scotch</option>
         </select>
    );
}

export default LiquorSelector