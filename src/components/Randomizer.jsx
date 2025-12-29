import { useState } from 'react'
import Button from "./Button"

function Randomizer() {
    
    const [drink, setDrink] = useState("Click the button");

    async function fetchRandonDrink () {
        try {
            const result = await fetch (
                "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            )
            
            const data = await result.json ();
            const drinkResult = data.drinks[0];

            setDrink(drinkResult)
        }catch (err) {
                console.error(err)
        }
    };
    

    
    return (
        <>
            {drink && <h2> {drink.strDrink} </h2>}
            <Button onClick={fetchRandonDrink} />
        </>
    );
};




export default Randomizer