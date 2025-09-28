import React from "react";
import { useState, useEffect } from "react";
import { MultipleSelect } from "./multiple-select.js";
import { dietOptions, intolerenceOptions, cuisineOptions } from "./multiple-select.js";
import { InputField } from "./input_field.js";
import { Button } from "./button.js";

export const FormWrapper = ({ setRecipes }) => {
    const key = process.env.REACT_APP_SPOON_KEY;

    const [ingredients, setIngredients] = useState([]);

    const [diet, setDiet] = useState([]);
    const [intolerances, setIntolerances] = useState([]);
    const [cuisines, setCuisines] = useState([]);

    const fetchData = async () => {
        const url = buildUrl();

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Could not connect');
            const data = await response.json();
            console.log(data);
            setRecipes(data.results);
        } catch (e) {
            console.log('Could not search properly: ' + e);
        }
    };

    const buildUrl = () => {
        const base = "https://api.spoonacular.com/recipes/complexSearch";
        const params = new URLSearchParams();

        if (ingredients.length > 0) params.append("includeIngredients", ingredients.join(","));
        if (diet.length > 0) params.append("diet", diet.join(","));
        if (intolerances.length > 0) params.append("intolerances", intolerances.join(","));
        if (cuisines.length > 0) params.append("cuisine", cuisines.join(","));

        params.append("addRecipeInformation", "true");
        params.append("addRecipeInstructions", "true");
        params.append("number", "10");
        params.append("apiKey", key);

        return `${base}?${params.toString()}`;
    };

    return (
        <div className="form-wrapper">
            <h2>Select Your Ingredients And Preferences</h2>
            <div className="input-wrapper">
                <InputField ingredients={ingredients} setIngredients={setIngredients}></InputField>
                <MultipleSelect id="diet" options={dietOptions} label="Diet: "></MultipleSelect>
                <MultipleSelect id="intolerence" options={intolerenceOptions} label="Intolerences: "></MultipleSelect>
                <MultipleSelect id="cuisine" options={cuisineOptions} label="Cuisine: "></MultipleSelect>
            </div>
            <Button text={"Generate Recipes"} primary={true} width={"400px"}></Button>
        </div>
    )
}