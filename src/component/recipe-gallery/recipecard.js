import { useState } from "react"
import "./recipes.css"
export const RecipeCard = ({item}) => {

    const [showIngredients, setShowIngredients] = useState(false);

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    }

    return (
        <div className="recipecard">
            <img src={item.image}></img>
            <div className="recipecardinfo">
                <h3>{item.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: item.summary }} />
                <button onClick={toggleIngredients}>click me</button>

                {showIngredients && (
                    <div className="ingredientscontainer">
                        <span>ingredients</span>                        
                    </div>
                )}

            </div>   
        </div>
    )
}