import { Link } from "react-router-dom";

// An overarching Button component that can be reused for styling consistency
// Can be turned into a Link type by passing in the "to" field

export const Button = ({text, buttonType, width, height, onClick, param, to}) => {
    const handleClick = onClick     //checks if an onclick was included (excluded for form buttons) and sets te onclick event to either nothing or the onclick function with/without param
        ? () => (param !== undefined ? onClick(param) : onClick())
        : undefined;
    
    // Formatting the styling class name based on the buttonType if passed in
    const btnClass = `btn ${buttonType}-btn`;

    // If a "to" is passed into the component, return early and instead create a Link with the redirection
    if (to) {
        return (
            <Link to={to} style={{width: width, height: height}} className={btnClass} onClick={handleClick}>
                {text}
            </Link>
        );
    }

    // Otherwise, a standard button and render
    return (
        <button style={{width: width, height:height, maxWidth: '80vw'}} className={btnClass} onClick={handleClick}>{text}</button>
    )
}