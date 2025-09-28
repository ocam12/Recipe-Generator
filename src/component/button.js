import React from "react";

export const Button = ({text, primary, width}) => {
    return (
        primary ? <button style={{width: width}} className="btn primary-btn">{text}</button> : <button style={{width: width}} className="btn secondary-btn">{text}</button>
    )
}