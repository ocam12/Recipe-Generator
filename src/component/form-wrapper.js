import { useState } from "react";
import { MultipleSelect } from "./multiple-select.js";
import { dietOptions, intolerenceOptions, cuisineOptions } from "./multiple-select.js";
import { InputField } from "./input_field.js";
import { Button } from "./button.js";

// The central container for the input field as well as the three selection components
// Handles the building of the API call as well as firing the request itself

export const FormWrapper = ({ setRecipes }) => {
    // The key used for API connection, held seperately in the .ENV file for security:
    // REACT_APP_SPOON_KEY = YOUR_KEY_HERE
    const key = process.env.REACT_APP_SPOON_KEY;

    // Use state list for the ingredients list
    const [ingredients, setIngredients] = useState([]);

    // Use states for each of the selection components
    const [diet, setDiet] = useState([]);
    const [intolerances, setIntolerances] = useState([]);
    const [cuisines, setCuisines] = useState([]);

    // The fetch itself
    const fetchData = async () => {
        // Call the API request builder
        const url = buildUrl();

        try {
            // The fetch
            const response = await fetch(url);

            // Guard against failed input
            if (!response.ok) throw new Error('Could not connect');

            const data = await response.json();

            // Guard against no results
            if (!data.results || data.results.length === 0) {
                alert("No recipes found for chosen ingredients and selections. Please double check your ingredients and selections and try again.");
                return;
            }

            console.log(data);
            // Set the recipes according to the fetch of the API request
            setRecipes(data.results);
        } catch (e) {
            console.log('Could not search properly: ' + e);
        }
    };

    // The API request builder
    const buildUrl = () => {
        // The base query for the API call
        const base = "https://api.spoonacular.com/recipes/complexSearch";
        const params = new URLSearchParams();
        
        // Add the ingredients to the list separated by commas (what Spoonacular expects)
        if (ingredients.length > 0) params.append("includeIngredients", ingredients.join(","));

        // Same for the diets, intolerances, and cuisines
        if (diet.length > 0) params.append("diet", diet.join(","));
        if (intolerances.length > 0) params.append("intolerances", intolerances.join(","));
        if (cuisines.length > 0) params.append("cuisine", cuisines.join(","));

        // Final query appends to get the relevant data
        params.append("addRecipeInformation", "true");
        params.append("addRecipeInstructions", "true");

        // We hard cap 10 recipes at most
        params.append("number", "10");
        params.append("apiKey", key);
        console.log(cuisines);
        return `${base}?${params.toString()}`;
    };

    return (
        <div className="form-wrapper">
            {/* Consists of an input field, then three selections, all styled in line */}
            <h2>Select Your Ingredients And Preferences</h2>
            <div className="input-wrapper">
                <InputField ingredients={ingredients} setIngredients={setIngredients}></InputField>
                <MultipleSelect id="diet" options={dietOptions} label="Diet: " value={diet} onChange={setDiet}></MultipleSelect>
                <MultipleSelect id="intolerence" options={intolerenceOptions} label="Intolerences: " value={intolerances} onChange={setIntolerances}></MultipleSelect>
                <MultipleSelect id="cuisine" options={cuisineOptions} label="Cuisine: " value={cuisines} onChange={setCuisines}></MultipleSelect>
            </div>
            {/* Finally a button that fires the API request via fetchData */}
            <Button text={"Generate Recipes"} buttonType={'primary'} width={"400px"} onClick={fetchData}></Button>
        </div>
    )
}