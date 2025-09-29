import React from "react";
import Select from "react-select";
import { useState } from "react";

//diet options array
export const dietOptions = [
  {value: 'Gluten%20Free', label: 'Gluten Free'},
  {value: 'Ketogenic', label: 'Ketogenic'},
  {value: 'Lacto-Vegetarian', label: 'Lacto-Vegetarian'},
  {value: 'Low%20FODMAP', label: 'Low FODMAP'},
  {value: 'Ovo-Vegetarian', label: 'Ovo-Vegetarian'},
  {value: 'Paleo', label: 'Paleo'},
  {value: 'Pescetarian', label: 'Pescetarian'},
  {value: 'Primal', label: 'Primal'},
  {value: 'Vegan', label: 'Vegan'},
  {value: 'Vegetarian', label: 'Vegetarian'},
  {value: 'Whole30', label: 'Whole30'},
];

//intolerence options array
export const intolerenceOptions = [
  {value: 'Dairy', label: 'Dairy'},
  {value: 'Egg', label: 'Egg'},
  {value: 'Gluten', label: 'Gluten'},
  {value: 'Grain', label: 'Grain'},
  {value: 'Peanut', label: 'Peanut'},
  {value: 'Seafood', label: 'Seafood'},
  {value: 'Sesame', label: 'Sesame'},
  {value: 'Shellfish', label: 'Shellfish'},
  {value: 'Soy', label: 'Soy'},
  {value: 'Sulfite', label: 'Sulfite'},
  {value: 'Tree%20Nut', label: 'Tree Nut'},
  {value: 'Wheat', label: 'Wheat'},
];

//cuisine options array
export const cuisineOptions = [
  {value: 'African', label: 'African'},
  {value: 'Asian', label: 'Asian'},
  {value: 'American', label: 'American'},
  {value: 'British', label: 'British'},
  {value: 'Cajun', label: 'Cajun'},
  {value: 'Caribbean', label: 'Caribbean'},
  {value: 'Chinese', label: 'Chinese'},
  {value: 'Eastern%20European', label: 'Eastern European'},
  {value: 'European', label: 'European'},
  {value: 'French', label: 'French'},
  {value: 'German', label: 'German'},
  {value: 'Greek', label: 'Greek'},
  {value: 'Indian', label: 'Indian'},
  {value: 'Irish', label: 'Irish'},
  {value: 'Italian', label: 'Italian'},
  {value: 'Japanese', label: 'Japanese'},
  {value: 'Jewish', label: 'Jewish'},
  {value: 'Korean', label: 'Korean'},
  {value: 'Latin%20American', label: 'Latin American'},
  {value: 'Mediterranean', label: 'Mediterranean'},
  {value: 'Mexican', label: 'Mexican'},
  {value: 'Middle%20Eastern', label: 'Middle Eastern'},
  {value: 'Nordic', label: 'Nordic'},
  {value: 'Southern', label: 'Southern'},
  {value: 'Spanish', label: 'Spanish'},
  {value: 'Thai', label: 'Thai'},
  {value: 'Vietnamese', label: 'Vietnamese'},
];

export const MultipleSelect = ({id, options, label, value, onChange}) => {

    //react hook that keeps track of selected variables and sets them
    const [selected, setSelected] = useState([]);

    //fired when select is change - sets selected state to all selected values and creates array of just the values for use in API call
    const handleChange = (options) => {
        setSelected(options);
        const selectedValues = options ? options.map(s => s.value) : [];
        console.log(`${label} Selected Values`, selectedValues);
        onChange(selectedValues);
    };

    const selectedOptions = options.filter(o => value.includes(o.value));

    //select using react-select to allow for multiple selections - wrapped in wrapper and given a label
    return (
        <div className="multiple-select-wrapper">
            <label htmlFor={id}>{label}</label>
            <Select 
                isMulti     //allows multiple selections
                id={id} 
                className="multiple-select"
                options={options}   
                value={selectedOptions} 
                onChange={handleChange} 
                placeholder="Select options..."
                styles={{
                    control: (base, state) => ({
                    ...base,
                    minHeight: '50px',
                    fontSize: '1.1rem',
                    borderColor: state.isFocused ? '#0eff0eff' : base.borderColor,
                    '&:hover': {
                        borderColor: state.isFocused ? '#0eff0eff' : base.borderColor
                    }
                    })
                }}
            ></Select>
        </div>
    )
}