function SaveButton ({drink, onSave}) {
    return (
        <button onClick= {() => onSave(drink)} disabled={!drink}>
            save Favorite 
        </button>    
    );
}

export default SaveButton