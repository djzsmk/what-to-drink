import { useState } from 'react'
import Button from "./Button"

function Randomizer() {
    
    const [drink, setDrink] = useState("Click the button");

    const drinks = ["Margarita", "Long Island", "Old Fashioned"];

    function pickRandomDrink () {
        const randomIndex = Math.floor(Math.random () * drinks.length)
        setDrink(drinks[randomIndex])
    }

    
    return (
        <>
            <h2> {drink} </h2>
            <Button onClick={pickRandomDrink} />
        </>
    );
};




export default Randomizer