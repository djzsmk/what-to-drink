import { useState } from 'react'
import Button from "./Button"
import LiquorSelector from './LiquorSelector';

function Randomizer() {
    
    const [drink, setDrink] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [liquor, setLiquor] = useState("")

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
    

    
    return (
        <>
            {loading &&  <p>Loading...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            {!loading && drink && <h2> {drink.strDrink} </h2>}
            <LiquorSelector selectedLiquor={liquor} onChange={setLiquor} />
            <Button onClick={fetchRandonDrink} diabled = {loading} />
        </>
    );
};




export default Randomizer