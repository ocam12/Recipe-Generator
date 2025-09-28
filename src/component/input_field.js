import { useState } from 'react';

export const InputField = () => {
    // JavaScript goes here

    // Input field for user to type in, initially empty of course
    const [input, setInput] = useState("");
    // Same as above, but storing an array/list of currently input ingredients, initially empty list
    const [ingredients, setIngredients] = useState([]);

    // The function called from onChange in the input html
    const handleChange = (event) => {
    setInput(event.target.value);
    };

    const handleSubmit = (event) => {
    // Stop reload, good practice
    event.preventDefault();

    // Guard against empty input
    if (input.trim() === "") return;
    
    // "...ingredients" means copy the current ingredients, then we add input as the new element
    setIngredients([...ingredients, input]);
    setInput("");
    };

    // Called from within html below
    const renderIngredientItems = () => {
        // Maps the item name (ingredient) to an idex
        return ingredients.map((item, index) => (
            // Creating the <li> element with the item name, item means "each element"
            <li key={index}>{item}</li>
        ));
    };

    return (
    // HTML goes here
    
    <div>
      <form class="ingredient-form" onSubmit={handleSubmit}>
        <label class="ingredient-heading" htmlFor='ingredient-input'>Tell Us Your Ingredients</label>
        <div class="ingredient-set">
        <input
            id="ingredient-input"
            class="input-ingredients"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Type in an ingredient here"
        />
        <button class="button-add-ingredient" type="submit">Add</button>
        </div>
      </form>

      <h3>Ingredients List:</h3>
      <ul class="ingredient-list">
        {renderIngredientItems()}
      </ul>
    </div>
    
    );

};