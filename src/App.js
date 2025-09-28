import './App.css';
import { useEffect } from 'react';

 
function App() { 
  const key = process.env.REACT_APP_SPOON_KEY;
  const ingredientsInclude = "burger";
  const ingredientsExclude = "rice";

  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsInclude}&excludeIngredients=${ingredientsExclude}&addRecipeInformation=true&number=5&apiKey=${key}`;

  const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok){throw new Error("Could not connect")}
        const data = await response.json();
        console.log(data);
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
    </div>
  );
}

export default App;