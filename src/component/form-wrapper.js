import React from "react";
import { useState } from "react";
import { MultipleSelect } from "./multiple-select.js";
import { dietOptions, intolerenceOptions, cuisineOptions } from "./multiple-select.js";

export const FormWrapper = () => {
    return (
        <div className="form-wrapper">
            <MultipleSelect id="diet" options={dietOptions} label="Diet: "></MultipleSelect>
            <MultipleSelect id="intolerence" options={intolerenceOptions} label="Intolerences: "></MultipleSelect>
            <MultipleSelect id="cuisine" options={cuisineOptions} label="Cuisine: "></MultipleSelect>
        </div>
    )
}