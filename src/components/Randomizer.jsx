import { useState } from 'react'
import Button from "./Button"
import LiquorSelector from './LiquorSelector';
import SaveButton from './SaveButton';
import IngredientsList from './IngredientsList';

function Randomizer() {
    
    const [drink, setDrink] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [liquor, setLiquor] = useState("")
    
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    })
    
    async function fetchRandonDrink () {
        try {
            setLoading(true);
            setError(null);
            
            
            const url = liquor
            ? `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
            :  "https://www.thecocktaildb.com/api/json/v1/1/random.php";
            
            const result = await fetch (url)
            const data = await result.json ();
            let drinkResult = data.drinks[0];
            
            
            if (!result.ok) {
                throw new Error("Network respone error")
            }
            
            
            if (liquor) {
                const randomIndex = Math.floor(Math.random() * data.drinks.length);
                drinkResult = data.drinks[randomIndex];
            } else {
                drinkResult =data.drinks[0]
            }
            
            
            setDrink(drinkResult);

            
        }catch (err) {
            console.error(err);
            setError("Failed to fetch drink. Try again please.")
        } finally {
            setLoading(false)
        }
    };
    
    
    
    
    function addFavorite(drink) {
        if (!favorites.some(fav => fav.idDrink === drink.idDrink)) {
            const newFavorites = [...favorites, drink];
            setFavorites(newFavorites);
            localStorage.setItem("favorites", JSON.stringify(newFavorites))
        }
    }
    
    

    return (
        <>
            {loading &&  <p>Loading...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            {!loading && drink && <h2> {drink.strDrink} </h2>}
            <LiquorSelector selectedLiquor={liquor} onChange={setLiquor} />
            {drink && (
                <>
                    <img src={drink.strDrinkThumb} alt ={drink.strDrink} style ={{width: "200px"}} />
                    <IngredientsList drink= {drink} />
                </>
            )}
            <Button onClick={fetchRandonDrink} disabled = {loading} />
            <SaveButton drink={drink} onSave={addFavorite} />
            
            
            <h3> Favorites</h3>
            <ul>
                {favorites.map(fav => (
                    <li 
                    key={fav.idDrink}
                    style={{ cursor: "pointer"}}
                    onClick={() => setDrink(fav)}>
                        {fav.strDrink}</li>
                 ))}
            </ul>
        </>
    );
};








export default Randomizer