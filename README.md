# What To Drink – Cocktail Randomizer

A React + Vite project that lets you discover cocktails at random, filter by liquor type, and save your favorites locally.

## Live Demo

[https://djzsmk.github.io/what-to-drink/](https://djzsmk.github.io/what-to-drink/)

---

## Features

- Fetch a random cocktail from [TheCocktailDB API](https://www.thecocktaildb.com/api.php)
- Filter drinks by liquor type (e.g., Vodka, Rum, Tequila)
- Display drink details, including ingredients and instructions
- Save favorite drinks locally using `localStorage.`
- Simple, reusable React components

---

## Technologies

- **React** (with JSX and functional components)  
- **Vite** for fast development and build  
- **JavaScript, HTML, CSS**  
- **Fetch API** to get cocktail data  
- **LocalStorage** to persist favorites

---

## Project Structure
src/
├── components/
│ ├── Randomizer.jsx # Main cocktail randomizer logic
│ ├── LiquorSelector.jsx # Dropdown to filter drinks by liquor
│ ├── Button.jsx # Generic button component
│ └── SaveButton.jsx # Save a drink to favorites
├── App.jsx # Combines components and renders the app
├── main.jsx # Entry point
└── index.css # Basic styling
