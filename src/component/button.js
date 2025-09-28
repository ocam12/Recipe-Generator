import React from "react";

export const Button = ({text, primary, width, height, onClick, param}) => {
    const handleClick = onClick     //checks if an onclick was included (excluded for form buttons) and sets te onclick event to either nothing or the onclick function with/without param
        ? () => (param !== undefined ? onClick(param) : onClick())
        : undefined;
    return (
        primary ? <button style={{width: width, height:height}} className="btn primary-btn" onClick={handleClick}>{text}</button> : <button style={{width: width, height:height}} className="btn secondary-btn" onClick={handleClick}>{text}</button>
    )
}