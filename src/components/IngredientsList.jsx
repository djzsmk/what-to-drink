function IngredientsList ({drink}) {
    if (!drink) return null;

    const ingredients = [];

    if (drink) {
        for(let i=1; i<15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(`${measure ? measure : ""} ${ingredient}`.trim())
            }
        }
    }

return (
    <>
    <h3>Ingredients</h3>
                    <ul>
                        {ingredients.map((item,index) => (
                            <li key ={index}>{item}</li>
                        ))}
                    </ul>
    </>                
)
};

export default IngredientsList