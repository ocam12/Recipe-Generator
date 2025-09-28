import React from "react";

export const Button = ({text, buttonType, width, height, onClick, param}) => {
    const handleClick = onClick     //checks if an onclick was included (excluded for form buttons) and sets te onclick event to either nothing or the onclick function with/without param
        ? () => (param !== undefined ? onClick(param) : onClick())
        : undefined;
    
    const btnClass = `btn ${buttonType}-btn`;

    return (
        <button style={{width: width, height:height}} className={btnClass} onClick={handleClick}>{text}</button>
    )
}