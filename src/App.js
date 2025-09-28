import { InputField } from './component/input_field.js';
import './App.css';
import { useEffect, useState, useState } from 'react';
import { MultipleSelect } from './component/multiple-select.js';
import { FormWrapper } from './component/form-wrapper.js';
import { Navbar } from './component/nav.js';import { RecipeGallery } from './components/recipegallery/recipegallery';

 
function App() { 
  const key = process.env.REACT_APP_SPOON_KEY;
  const ingredientsInclude = "burger";
  const ingredientsExclude = "rice";
  const [Recipes, setRecipes] = useState([]);

  const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsInclude}&excludeIngredients=${ingredientsExclude}&addRecipeInformation=true&addRecipeInstructions&number=5&apiKey=${key}`;

  const fetchData = async () => {
    /*try {
        const response = await fetch(url);
        if (!response.ok){throw new Error("Could not connect")}
        const data = await response.json();
        console.log(data);

        setRecipes(data.results);
    } catch (e) {
        console.log('Could not search properly: ' + e);
    }*/
  }

  useEffect(() => {
    //fetchData()
    console.log('Nice');
  }, []);
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <FormWrapper>
      </FormWrapper>
      

      <RecipeGallery items={Recipes}></RecipeGallery>
    </div>
  );
}

export default App;