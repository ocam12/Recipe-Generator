import './App.css';
import { useEffect, useState } from 'react';
import { RecipeGallery } from './components/recipegallery/recipegallery';

 
function App() { 
  const key = process.env.REACT_APP_SPOON_KEY;
  const ingredientsInclude = "burger";
  const ingredientsExclude = "rice";
  const [Recipes, setRecipes] = useState([]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsInclude}&excludeIngredients=${ingredientsExclude}&addRecipeInformation=true&number=5&apiKey=${key}`;

  const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok){throw new Error("Could not connect")}
        const data = await response.json();
        console.log(data);

        setRecipes(data.results);
    } catch (e) {
        console.log('Could not search properly: ' + e);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <RecipeGallery items={Recipes}></RecipeGallery>
    </div>
  );
}

export default App;