import { useState } from 'react'
import Button from "./Button"

function Randomizer() {
    
    const [drink, setDrink] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchRandonDrink () {
        try {
            setLoading(true);
            setError(null);

            const result = await fetch (
                "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            );

            if (!result.ok) {
                throw new Error("Network respone error")
            }
            
            const data = await result.json ();
            const drinkResult = data.drinks[0];

            setDrink(drinkResult)
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
            <Button onClick={fetchRandonDrink} diabled = {loading} />
        </>
    );
};




export default Randomizer