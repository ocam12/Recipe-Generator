import React from 'react';
import { useState } from 'react';
import { Button } from './button';

export const InputField = ({ ingredients, setIngredients }) => {
    // JavaScript goes here

    // Input field for user to type in, initially empty of course
    const [input, setInput] = useState("");

    // The function called from onChange in the input html
    const handleChange = (event) => {
    setInput(event.target.value);
    };

    const handleSubmit = (event) => {
    // Stop reload, good practice
    event.preventDefault();

    // Guard against empty input
    if (input.trim() === "") return;
    if (input.length > 15) return;
    
    // "...ingredients" means copy the current ingredients, then we add input as the new element
    setIngredients([...ingredients, input]);
    setInput("");
    };

    const removeItem = (idx) => {
      const next = ingredients.filter((_, i) => i !== idx);
      setIngredients(next);
    };

    return (
    // HTML goes here
    
    <div>
      <form className="ingredient-form" onSubmit={handleSubmit}>
        <label className="ingredient-heading" htmlFor='ingredient-input'>Owned Ingredients: </label>
        <div className="ingredient-set">
        <input
            id="ingredient-input"
            className="input-ingredients"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Chicken, Onion, ..."
            maxLength={15}
        />
        <Button type="submit" text="Add" buttonType={'primary'} width="100px" height="50px"></Button>
        </div>
          {input.length >= 15 && (
            <div className='input-warning'>Max. 15 Characters Allowed</div>
          )}
      </form>

      <ul className="ingredient-list">
        {ingredients.map((item, index) => (
            <li key={index}>
                <p>{item} </p>

                <Button text="x" buttonType={'delete'} width="30px" height="25px" onClick={() => removeItem(index)}></Button>
            </li>
        ))}
      </ul>
    </div>
    
    );

};