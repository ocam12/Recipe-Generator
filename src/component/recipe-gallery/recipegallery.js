import { RecipeCard } from "./recipecard"
import "./recipes.css"

export const RecipeGallery = ({items}) => {

    return (
        <div style={{justifyContent: "center", display: "flex"}}>
            <div className="recipegallery">
                {items.map((item, index) => {
                    return (
                        
                            <RecipeCard key={index} item={item}></RecipeCard>
                    )
                })}
                
            </div>            
        </div>

    )
}