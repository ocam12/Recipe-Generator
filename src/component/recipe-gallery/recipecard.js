import { useState } from "react"
import "./recipes.css"
import { Button } from "../button";
const key = process.env.REACT_APP_SPOON_KEY;

//Recipe cards that are displayed after a user asks to generate recipes
export const RecipeCard = ({item}) => {

    const [showIngredients, setShowIngredients] = useState(false);      //state taht tracks if ingredients should be shown or not (false by default)
    const [ingredients, setIngredients] = useState([]);     //state that tracks the ingredients of each recipe

    const toggleIngredients = () => {
        // Fetch ingredients
        const fetchData = async () => {     //fetches the ingredients given a recipe id
            try {
                const url = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${key}&includeNutrition=false`;
                const response = await fetch(url);
                if (!response.ok){throw new Error("Could not connect")}
                const data = await response.json();

                setIngredients(data.extendedIngredients);
            } catch (e) {
                console.Error('Could not search properly: ' + e);
            }
        }

        if (showIngredients === false) {     
            fetchData();            
        }
        
        setShowIngredients(!showIngredients);       //toggles showIngredients
    }

    return (        //HTML for the recipe cards
        <div className="recipecard">
            <img src={item.image} alt="recipe image"></img>
            <div className="recipecard-info">
                <div className="recipecard-info-main">
                    <h3 className="recipecard-title">{item.title}</h3>
                    <div className="recipecard-subtitle row">
                        <p>Serves {item.servings}</p>
                        <p>Ready In {item.readyInMinutes} Minutes</p>
                    </div>
                    <div className="recipecard-btn-container row">
                        <a className="recipecard-link btn primary-btn" href={item.sourceUrl} target="_BLANK" rel="noreferrer">Recipe</a>
                        <Button buttonType="secondary" onClick={toggleIngredients} text={"Show Ingredients"} width={'200px'}></Button>
                    </div>
                </div>
                {/* Recipe cards ingredients section visibility is controlled by showIngredients state */}
                {showIngredients && (
                    <div className="ingredients-container">
                        <p>Ingredients: </p>
                        <ul className="ingredients-list">
                            {ingredients.map((item, index) => {
                                return (
                                    <li className="ingredient" key={index}>{item.name}</li>                                    
                                )
                            })}
                        </ul>                   
                    </div>
                )}

                 <ul className="recipecard-cuisine-list">
                    {item.cuisines.map((cuisine, index) => {
                        return (
                            <li key={index}>{cuisine}</li>                                    
                        )
                    })}
                </ul>
            </div>   
        </div>
    )
}