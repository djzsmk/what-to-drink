function Button ({onClick, disabled}) {
    return (
    <button onClick = {onClick} disabled = {disabled}>
        {disabled ? "Loading..." : "Random Drink"}
    </button>
    )
}

export default Button