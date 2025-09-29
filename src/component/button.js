import React from "react";
import { Link } from "react-router-dom";

export const Button = ({text, buttonType, width, height, onClick, param, to}) => {
    const handleClick = onClick     //checks if an onclick was included (excluded for form buttons) and sets te onclick event to either nothing or the onclick function with/without param
        ? () => (param !== undefined ? onClick(param) : onClick())
        : undefined;
    
    const btnClass = `btn ${buttonType}-btn`;

    if (to) {
        return (
            <Link to={to} style={{width: width, height: height}} className={btnClass}>
                {text}
            </Link>
        );
    }

    return (
        <button style={{width: width, height:height}} className={btnClass} onClick={handleClick}>{text}</button>
    )
}