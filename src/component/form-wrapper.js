import React from "react";
import { useState } from "react";
import { MultipleSelect } from "./multiple-select.js";
import { dietOptions, intolerenceOptions, cuisineOptions } from "./multiple-select.js";
import { InputField } from "./input_field.js";
import { Button } from "./button.js";

export const FormWrapper = () => {
    return (
        <div className="form-wrapper">
            <h2>Select Your Ingredients And Preferences</h2>
            <div className="input-wrapper">
                <InputField></InputField>
                <MultipleSelect id="diet" options={dietOptions} label="Diet: "></MultipleSelect>
                <MultipleSelect id="intolerence" options={intolerenceOptions} label="Intolerences: "></MultipleSelect>
                <MultipleSelect id="cuisine" options={cuisineOptions} label="Cuisine: "></MultipleSelect>
            </div>
            <Button text={"Generate Recipes"} primary={true} width={"400px"}></Button>
        </div>
    )
}