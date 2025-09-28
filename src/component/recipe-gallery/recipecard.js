import { useState } from "react"
import "./recipes.css"
import { Button } from "../button";
const key = process.env.REACT_APP_SPOON_KEY;

export const RecipeCard = ({item}) => {

    const [showIngredients, setShowIngredients] = useState(false);
    const [ingredients, setIngredients] = useState([]);

    const toggleIngredients = () => {
        // Fetch ingredients
        const fetchData = async () => {
            try {
                const url = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${key}&includeNutrition=false`;
                const response = await fetch(url);
                if (!response.ok){throw new Error("Could not connect")}
                const data = await response.json();
                console.log(data);

                setIngredients(data.extendedIngredients);
            } catch (e) {
                console.log('Could not search properly: ' + e);
            }
        }

        if (showIngredients == false) {
            fetchData();            
        }

        
        setShowIngredients(!showIngredients);
    }

    return (
        <div className="recipecard">
            <img src={item.image}></img>
            <div className="recipecardinfo">
                <h3>{item.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: item.summary }} />
                <Button onClick={toggleIngredients} text={"Show Ingredients"} width={'100%'}></Button>

                {showIngredients && (
                    <div className="ingredientscontainer">
                        <ul>
                            {ingredients.map((item, index) => {
                                return (
                                    <li key={index}>{item.name}</li>                                    
                                )
                            })}
                        </ul>                   
                    </div>
                )}

            </div>   
        </div>
    )
}