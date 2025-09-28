import React from "react";
import Select from "react-select";
import { useState } from "react";

export const dietOptions = [
  {value: 'Vegan', label: 'Vegan'},
  {value: 'Vegetarian', label: 'Vegetarian'},
];

export const intolerenceOptions = [
  {value: 'Dairy', label: 'Dairy'},
  {value: 'Nuts', label: 'Nuts'},
];

export const cuisineOptions = [
  {value: 'Arabic', label: 'Arabic'},
  {value: 'Italian', label: 'Italian'},
  {value: 'Japanese', label: 'Japanese'},
];

export const MultipleSelect = ({id, options, label}) => {

    //react hook that keeps track of selected variables and sets them
    const [selected, setSelected] = useState([]);

    //fired when select is change - sets selected state to all selected values and creates array of just the values for use in API call
    const handleChange = (options) => {
        setSelected(options);
        const selectedValues = options ? options.map(s => s.value) : [];
        console.log(`${label} Selected Values`, selectedValues);
    };

    //select using react-select to allow for multiple selections - wrapped in wrapper and given a label
    return (
        <div className="multiple-select-wrapper">
            <label htmlFor={id}>{label}</label>
            <Select 
                isMulti     //allows multiple selections
                id={id} 
                className="multiple-select"
                options={options}   
                value={selected} 
                onChange={handleChange} 
                placeholder="Select options..."
                styles={{
                    control: (base, state) => ({
                    ...base,
                    borderColor: state.isFocused ? '#17ff32ff' : base.borderColor,
                    '&:hover': {
                        borderColor: state.isFocused ? '#17ff32ff' : base.borderColor
                    }
                    })
                }}
            ></Select>
        </div>
    )
}